import ProjectEditorRolesItem from '@features/project/ProjectEditor/ProjectEditorRolesItem';
import { ProjectDetailProps } from '@type/ProjectTypes';
import InputErrorMessage from 'component/error/InputErrorMessage';
import { useFormContext } from 'react-hook-form';

interface ProjectRolesProps {
    keyName: keyof ProjectDetailProps;
}

const ProjectEditorRoles: React.FC<ProjectRolesProps> = ({ keyName }) => {
    const {
        formState: { errors },
        getValues,
        setValue,
        register,
        watch,
    } = useFormContext();

    const selectRoles = [
        { roleName: '디자인', rolePercent: 0, role_id: 1 },
        { roleName: '퍼블리싱', rolePercent: 0, role_id: 2 },
        { roleName: '개발', rolePercent: 0, role_id: 3 },
        { roleName: '기획', rolePercent: 0, role_id: 4 },
    ];

    const getRoles = getValues(keyName);
    const errorMessage = errors[keyName]?.message;

    return (
        <>
            {selectRoles.map((role, idx) => {
                return (
                    <ProjectEditorRolesItem
                        key={idx}
                        roleName={role.roleName}
                        getRoles={getRoles}
                        roleId={role.role_id}
                        watch={watch}
                        setValue={setValue}
                        getValues={getValues}
                        register={register}
                    />
                );
            })}

            {keyName}

            {typeof errorMessage === 'string' && (
                <InputErrorMessage>{errorMessage}</InputErrorMessage>
            )}
        </>
    );
};

export default ProjectEditorRoles;
