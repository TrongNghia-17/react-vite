import { Link, NavLink } from 'react-router-dom';
import {
    UsergroupAddOutlined, HomeOutlined,
    AuditOutlined, SettingOutlined,
    AliwangwangOutlined,
    LoginOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const [current, setCurrent] = useState('');
    const { user } = useContext(AuthContext);

    const onClick = e => {
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to="/users">Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />,
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <AuditOutlined />,
        },
        ...(!user.id ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />
        }] : []),
        ...(user.id ? [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            Children: [
                {
                    label: 'Đăng xuất',
                    key: 'logout',
                },
            ],
        }] : [])
    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal" items={items}
        />

    )
}
export default Header;