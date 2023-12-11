import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

const App = () => (
  <div className="App">
    <div className='header'>
      <Button type="primary">Button</Button>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined />}>
        Search
      </Button>
      <Button icon={<SearchOutlined />} href="https://www.google.com" />
    </div>

    <div className='content'>
      <Link to='/'>首页</Link>|||||
      <Link to='/about'>关于about页</Link>
      <Outlet />
    </div>



  </div>
);

export default App;