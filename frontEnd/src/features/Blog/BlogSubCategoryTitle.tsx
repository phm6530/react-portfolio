import { SubTitle } from 'component/ui/Subtitle';
import PostAddBtn from 'component/ui/PostAddBtn';
import { useSearchParams } from 'react-router-dom';
import useStore from 'store/zustandStore';

const BlogSUbCategoryTitle = () => {
    const [searchParams] = useSearchParams();
    const item: string = searchParams.get('item') || 'All';
    const login = useStore(state => state.userAuth.login);

    return (
        <SubTitle>
            <div className="subText">
                <span className="point">{item}</span>
                {login && <PostAddBtn />}
            </div>
        </SubTitle>
    );
};

export default BlogSUbCategoryTitle;
