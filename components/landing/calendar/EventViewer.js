import { Row, Col, Tag } from "antd";
//service
import { setBackground } from "../../../services/eventService";
//css
import styles from "./calendar.module.sass";

export default function EventViewer({ displayEvent, selectedDay }) {
  console.log('displayEvent',displayEvent);
  return (
    <Row>
      <Col span={24}>
        <p className={`my-4 mx-auto ${styles.day}`}>{selectedDay}</p>
        <div className={`d-flex flex-column`}>
          {displayEvent.length > 0 ? (
            displayEvent.map((event) => (
              <Tag
                className={`mx-auto my-4 ${styles.tag}`}
                color={`${setBackground(event)[0]}`}
              >
                <p className={`m-0 py-3`}>{event.Title}</p>
              </Tag>
            ))
          ) : (
            <p className={`w-75 m-auto text-primary font-weight-bold`}>
              Select a Date to View Event
            </p>
          )}
        </div>
      </Col>
    </Row>
  );
}
