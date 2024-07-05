import {
    FieldValues,
    UseFormGetValues,
    UseFormRegister,
    UseFormSetValue,
    UseFormWatch,
} from 'react-hook-form';
import styled from 'styled-components';

const RoleWrapper = styled.label`
    cursor: pointer;
`;

interface Roles {
    roleName: string;
    rolePercent: number;
    role_id: number;
}

interface ItemProps {
    roleName: string;
    getRoles: Roles[];
    roleId: number;
    watch: UseFormWatch<FieldValues>;
    getValues: UseFormGetValues<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    register: UseFormRegister<FieldValues>;
}

const ProjectEditorRolesItem: React.FC<ItemProps> = ({
    roleName,
    roleId,
    getRoles,
    setValue,
    watch,
}) => {
    const [test] = getRoles.filter(role => {
        return role.role_id === roleId;
    });

    const prevValue = watch('projectRoles');
    const initalRole = { roleName, rolePercent: 0, role_id: roleId };
    // console.log(initalRole);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChk = e.target.checked;
        if (isChk) {
            const newValue = [...prevValue, initalRole];
            setValue('projectRoles', newValue);
        } else {
            const newValue = prevValue.filter((role: Roles) => {
                return role.role_id !== roleId;
            });
            setValue('projectRoles', newValue);
        }
    };

    const rangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPercent = Number(e.target.value); // 입력받은 새로운 백분율
        const updatedRoles = prevValue.map((role: Roles) => {
            if (role.role_id === roleId) {
                return { ...role, rolePercent: newPercent }; // 현재 roleId에 해당하는 role의 rolePercent를 업데이트
            }
            return role;
        });
        setValue('projectRoles', updatedRoles); // 업데이트된 배열로 projectRoles 상태를 설정
    };

    return (
        <>
            <RoleWrapper>
                <input
                    type="checkbox"
                    value={roleId}
                    checked={!!test}
                    // {...register()}
                    onChange={changeHandler}
                />{' '}
                {roleName}
            </RoleWrapper>
            {!!test && (
                <>
                    <input
                        type="range"
                        value={test?.rolePercent || 0}
                        onChange={rangeChange}
                    />{' '}
                    {test?.rolePercent || 0}%
                </>
            )}
        </>
    );
};

export default ProjectEditorRolesItem;
