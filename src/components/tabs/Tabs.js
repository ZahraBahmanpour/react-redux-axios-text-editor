import { Tabs as Tabbs, Tab } from "react-bootstrap";
import TabContent from "./TabContent";
import TabHeader from "./TabHeader";
import { useSelector, useDispatch } from "react-redux";
import { activeTab } from "../../redux/features/tab/tabsSlice";

function Tabs() {
  const { tabs, activeKey } = useSelector((state) => state.tabs);
  const dispatch = useDispatch();
  return (
    <div style={{ width: "100%" }}>
      <Tabbs
        id="controlled-tab-example"
        activeKey={activeKey}
        className="mb-3"
        onSelect={(key) => dispatch(activeTab(key))}
      >
        {tabs.map((tab) => (
          <Tab key={tab.id} eventKey={tab.id} title={<TabHeader {...tab} />}>
            <TabContent {...tab} />
          </Tab>
        ))}
      </Tabbs>
    </div>
  );
}

export default Tabs;
