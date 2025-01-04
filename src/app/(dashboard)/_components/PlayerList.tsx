import { Typography } from "antd";
import UserShortInfo from "./UserShortInfo";
import { data } from '@/apis/data';

export default function PlayerList() {
  return (
    <>
      <Typography.Title level={2}>Similar Players</Typography.Title>
      <div className="grid grid-cols-2">
        <div className="players-list">
          <Typography.Title level={3}>New Joined Players</Typography.Title>
          <ul>
            {data.map((player) => (
              <li key={player.key}>
                <UserShortInfo
                  src={player.image}
                  height={80}
                  width={80}
                  fName={player.fname}
                  lName={player.lname}
                  average={player.avg}
                  rating={player.rating}
                  title={player.academy}
                  school={player.school}
                  schoolIcon={player.schoolIcon}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="players-list">
          <Typography.Title level={3}>Popular Players</Typography.Title>
          <ul>
            {data.map((player) => (
              <li key={player.key}>
                <UserShortInfo
                  src={player.image}
                  height={80}
                  width={80}
                  fName={player.fname}
                  lName={player.lname}
                  average={player.avg}
                  rating={player.rating}
                  title={player.academy}
                  school={player.school}
                  schoolIcon={player.schoolIcon}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
