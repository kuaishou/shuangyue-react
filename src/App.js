import { Button ,Tooltip} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './App.css';

const App = () => (
  <div className="App">
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
);

export default App;