// Components
import Upload from '../components/upload'

// UI elements
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function Dashboard() {
  return (
    <main>
      <Tabs justify defaultActiveKey="downloads">
        <Tab data-testid="tab" eventKey="downloads" title="My downloads" className="text-body">
          <br/>
          <p>Tab 1</p>
        </Tab>
        <Tab data-testid="tab" eventKey="upload" title="Upload new release">
          <br/>
          <Upload />
        </Tab>
        <Tab data-testid="tab" eventKey="myreleases" title="My releases">
          <br/>
          <p>Tab 3</p>
        </Tab>
      </Tabs>
    </main>
  )
}
