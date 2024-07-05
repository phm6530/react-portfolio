const fetchEditProjectModel = (conn) => {
    return {
        fetchEditRequest: async (key) => {
            const sql = `
            select * from 
                project as a 
            inner join 
                project_description as b on a.project_key = b.project_key 
            where a.project_key = ?
        `;
            const [response] = await conn.query(sql, [key]);
            return response;
        },
        fetchEditRole: async (projectId) => {
            const sql = `
            select b.role_name as roleName , a.percent as rolePercent , b.role_id as role_id
            from 
                project_roles_data a
            join 
                project_roles b on a.role_id = b.role_id
            where project_id = ?;
            `;
            const [response] = await conn.query(sql, [projectId]);
            return response;
        },
    };
};

const projectActionModel = (conn) => {
    return {
        projectRole: async (values, id, pageType) => {
            console.log(values, id, pageType);
            let sql = '';
            if (pageType === 'add') {
                sql = `INSERT INTO project_roles_data (role_id, project_id, percent) VALUES ${values}`;
                return conn.query(sql);
            } else {
                sql = `DELETE FROM project_roles_data WHERE project_id = ?`;
                await conn.query(sql, [id]);
                sql = `INSERT INTO project_roles_data (role_id, project_id, percent) VALUES ${values}`;

                return conn.query(sql);
            }
        },
        projectAction: async (
            { projectKey, title, company, skill, hashtag, description, startDate, endDate, projectUrl, thumbnail }, //디스크립션은 필요없음
            pageType, // 페이지 타입
        ) => {
            let sql = '';
            const params = [
                projectKey,
                title,
                company,
                skill,
                hashtag,
                description,
                startDate,
                endDate,
                projectUrl,
                thumbnail,
            ];
            // console.log(params);
            if (pageType === 'add') {
                sql = `
                    INSERT INTO 
                    project(
                        project_key ,
                        title,
                        company,
                        skill,
                        hashtag ,
                        description,
                        start_date,
                        end_date,
                        project_url, 
                        thumbnail
                    )
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
                `;
            } else {
                sql = `
                    UPDATE 
                        project 
                    SET
                        project_key = ?,
                        title = ?, 
                        company = ?, 
                        skill = ?, 
                        hashtag = ?,
                        description = ?, 
                        start_date = ?, 
                        end_date = ?, 
                        project_url = ?,
                        thumbnail = ?
                    WHERE 
                        project_key = ?
                `;
                params.push(projectKey);
            }

            return conn.query(sql, params);
        },
        projectActionDescription: ({ projectKey, projectDescription, ...project }, pageType) => {
            let sql = '';
            const params = [projectKey, projectDescription];
            if (pageType === 'add') {
                sql = `
                    INSERT INTO project_description (project_key, project_description)
                    VALUE (? , ?);
                `;
            } else {
                sql = `update project_description set 
                project_key = ?,
                project_description = ? where project_key = ? `;
                params.push(projectKey);
            }
            return conn.query(sql, params);
        },
    };
};

module.exports = {
    fetchEditProjectModel,
    projectActionModel,
};
