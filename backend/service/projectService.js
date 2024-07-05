const { NotFoundError } = require('../util/error');
const projectModel = require('../models/projectModel');

const transformProperty = (target) => {
    const [{ end_date, project_url, start_date, project_key, project_description, ...rest }] = target;
    const camelTransformItem = {
        endDate: end_date,
        startDate: start_date,
        projectUrl: project_url,
        projectKey: project_key,
        projectDescription: project_description,
        ...rest,
    };
    return camelTransformItem;
};

const transformtoArr = (targetArr, keys) => {
    const ChangeResponse = targetArr.map((obj) => {
        const newObj = { ...obj };
        keys.forEach((key) => {
            if (typeof newObj[key] === 'string') {
                newObj[key] = newObj[key].split(',');
            } else {
                newObj[key] = [];
            }
        });
        return newObj;
    });
    return ChangeResponse;
};

// 프로젝트 리스트
const getProjectList = async (conn) => {
    const [rows] = await conn.query('SELECT * FROM project ORDER BY id DESC');
    const newResult = rows.map((item) => {
        return transformProperty([item]);
    });
    return transformtoArr(newResult, ['skill', 'hashtag']);
};

// 프로젝트 디테일
const getProjectDetail = async (req, next, conn) => {
    const model = projectModel.fetchEditProjectModel(conn);
    const param = req.params.key;
    const rows = await model.fetchEditRequest(param);

    if (!rows || rows.length === 0) {
        const err = new NotFoundError('이미 삭제된 게시물이거나 잘못된 접근입니다.');
        next(err);
    }

    const projectId = rows[0].id;
    const roles = await model.fetchEditRole(projectId);

    const result = transformtoArr(rows, ['skill', 'hashtag']);
    const transformData = transformProperty(result);
    return { ...transformData, projectRoles: roles };
};

// 프로젝트 수정 타겟 데이터 get
const getProjectEditDetail = async (req, conn) => {
    const model = projectModel.fetchEditProjectModel(conn);
    const key = req.params.key;
    const fetchData = await model.fetchEditRequest(key);
    const transformData = transformProperty(fetchData);

    //프로젝트 id 가져오기
    const projectId = fetchData[0].id;
    const roles = await model.fetchEditRole(projectId);
    const [projectData] = transformtoArr([transformData], ['skill', 'hashtag']);
    const result = { ...projectData, projectRoles: roles };

    return result;
};

// 프로젝트 수정 or 생성
const actionProjectDetail = async (req, conn) => {
    const actionModel = projectModel.projectActionModel(conn);
    const pageType = req.query.type; //페이지 쿼리스트링으로 분기
    const data = req.body;

    const project = {
        ...data,
        startDate: data.startDate.split('T')[0],
        endDate: data.endDate.split('T')[0],
        skill: data.skill.join(','),
        hashtag: data.hashtag.join(','),
    };

    //add 면 insertID반환해서 업데이트
    const [res] = await actionModel.projectAction(project, pageType);

    // 아니면 그냥 프론트에서 보낸 id 반영
    const projectId = pageType === 'add' ? res.insertId : project.id;

    // 룰 부분 일괄처리 위해서 이렇게했음
    const ProjectRolesValues = project.projectRoles
        .map((e) => {
            return `(${e.role_id},${projectId},${e.rolePercent})`;
        })
        .join(', ');

    await actionModel.projectActionDescription(project, pageType);
    await actionModel.projectRole(ProjectRolesValues, projectId, pageType);
    // project_Description 테이블에 데이터 삽입
};

module.exports = {
    getProjectList,
    getProjectDetail,
    getProjectEditDetail,
    actionProjectDetail,
};
