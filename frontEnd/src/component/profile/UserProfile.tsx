import { RiMapPin2Fill } from 'react-icons/ri';

import {
    ProfileCard,
    ProfilePicture,
    ProfileInfo,
    ProfileName,
    ProfileLocation,
    JobTitle,
} from 'component/profile/UserProfileStyle';
import useStore from 'store/zustandStore';

export default function UserProfile() {
    const login = useStore(state => state.userAuth.login);

    return (
        <ProfileCard>
            <ProfilePicture $isOnline={login}>
                <img src="/img/me.jpg" alt="IT's ME" />
            </ProfilePicture>

            <ProfileInfo>
                <ProfileName>Park, Hyun Min</ProfileName>
                <ProfileLocation>
                    <RiMapPin2Fill /> 경기도 하남시 거주
                </ProfileLocation>
                <JobTitle>Web Publisher</JobTitle>
                <JobTitle>Front Developer</JobTitle>
            </ProfileInfo>
        </ProfileCard>
    );
}
