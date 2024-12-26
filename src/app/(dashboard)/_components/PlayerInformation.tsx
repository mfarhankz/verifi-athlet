import type { TabsProps } from "antd";
import { Table, Tabs } from "antd";
import Image from "next/image";
import type { TableColumnsType } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

interface DataType {
  key: string;
  season: string;
  team: string;
  gp: number;
  cmp: number;
  att: number;
  cmp2: number;
  yds: number;
  avg: number;
  td: number;
  int: number;
  lng: number;
  sack: number;
  rtg: number;
  qbr: number | string;
}

const dataSource: DataType[] = [
  {
    key: "1",
    season: "2018",
    team: "KC",
    gp: 1374,
    cmp: 6065,
    att: 6690,
    cmp2: 5948,
    yds: 3536,
    avg: 8811,
    td: 1784,
    int: 9261,
    lng: 8829,
    sack: 6025,
    rtg: 5028,
    qbr: 4600,
  },
  {
    key: "2",
    season: "2019",
    team: "KC",
    gp: 8013,
    cmp: 5560,
    att: 3933,
    cmp2: 1577,
    yds: 8861,
    avg: 5560,
    td: 8861,
    int: 8861,
    lng: 6025,
    sack: 5045,
    rtg: 9359,
    qbr: 5626,
  },
  {
    key: "3",
    season: "2020",
    team: "KC",
    gp: 6065,
    cmp: 1784,
    att: 4600,
    cmp2: 6690,
    yds: 9151,
    avg: 9151,
    td: 9261,
    int: 6065,
    lng: 1439,
    sack: 5028,
    rtg: 4600,
    qbr: 4846,
  },
  {
    key: "4",
    season: "2021",
    team: "KC",
    gp: 1148,
    cmp: 4152,
    att: 9151,
    cmp2: 5028,
    yds: 8829,
    avg: 4846,
    td: 9261,
    int: 1439,
    lng: 4349,
    sack: 9151,
    rtg: 6025,
    qbr: 8013,
  },
  {
    key: "5",
    season: "2022",
    team: "KC",
    gp: 7791,
    cmp: 8013,
    att: 4152,
    cmp2: 8829,
    yds: 9462,
    avg: 5045,
    td: 4846,
    int: 4846,
    lng: 8811,
    sack: 6025,
    rtg: 9374,
    qbr: 3933,
  },
  {
    key: "6",
    season: "2023",
    team: "KC",
    gp: 8811,
    cmp: 4349,
    att: 1577,
    cmp2: 9151,
    yds: 9374,
    avg: 1374,
    td: 6690,
    int: 7791,
    lng: 1577,
    sack: 8861,
    rtg: 6065,
    qbr: 2798,
  },
  {
    key: "7",
    season: "2024",
    team: "KC",
    gp: 9374,
    cmp: 1577,
    att: 5948,
    cmp2: 4600,
    yds: 8861,
    avg: 1374,
    td: 1439,
    int: 1148,
    lng: 5948,
    sack: 8861,
    rtg: 2798,
    qbr: 9151,
  },
  {
    key: "8",
    season: "Career",
    team: "",
    gp: 7791,
    cmp: 8013,
    att: 4152,
    cmp2: 8829,
    yds: 9462,
    avg: 5045,
    td: 4846,
    int: 4846,
    lng: 8811,
    sack: 6025,
    rtg: 9374,
    qbr: "-",
  },
];

const columns: TableColumnsType<DataType> = [
  {
    title: "Season",
    dataIndex: "season",
    key: "season",
  },
  {
    title: " Team",
    dataIndex: "team",
    key: "team",
    render: (_, record) => (
      <div className="flex">
        {record.team && (
          <Image
            src="/kisspng.svg"
            alt={record.team}
            width={38}
            height={23}
            className="mr-2"
          />
        )}
        {record.team}
      </div>
    ),
  },
  {
    title: "GP",
    dataIndex: "gp",
    key: "gp",
  },
  {
    title: "CMP",
    dataIndex: "cmp",
    key: "cmp",
  },
  {
    title: "ATT",
    dataIndex: "att",
    key: "att",
  },
  {
    title: "CMP",
    dataIndex: "cmp2",
    key: "cmp2",
  },
  {
    title: "YDS",
    dataIndex: "yds",
    key: "yds",
  },
  {
    title: "AVG",
    dataIndex: "avg",
    key: "avg",
  },
  {
    title: "TD",
    dataIndex: "td",
    key: "td",
  },
  {
    title: "INT",
    dataIndex: "int",
    key: "int",
  },
  {
    title: "LNG",
    dataIndex: "lng",
    key: "lng",
  },
  {
    title: "SACK",
    dataIndex: "sack",
    key: "sack",
  },
  {
    title: "RTG",
    dataIndex: "rtg",
    key: "rtg",
  },
  {
    title: "QBR",
    dataIndex: "qbr",
    key: "qbr",
  },
];

const Bio = () => (
  <div className="bio">
    <h3>Contact Information</h3>
    <div className="grid grid-cols-2 p-5 gap-y-10">
      <div>
        <span>Cell Phone</span>
        <h5>(314) 412 2995</h5>
      </div>
      <div>
        <span>OK to Connect</span>
        <h5 className="flex">
          <Image
            className="mr-1"
            src={"/tick.svg"}
            alt={"Tick"}
            width={20}
            height={20}
          />
          Yes
        </h5>
      </div>
      <div>
        <span>Email Address</span>
        <h5>
          <a href="#">mrsh543@gmail.com</a>
        </h5>
      </div>
      <div>
        <span>Birthday</span>
        <h5>9/17/1995 (29)</h5>
      </div>
      <div className="col-span-2">
        <span>Preferred Contact Way</span>
        <h5>Text, Email</h5>
      </div>
      <div>
        <span>Helping with Decesion</span>
        <h5>Parent</h5>
      </div>
      <div>
        <span>Contact Info</span>
        <h5 className="flex items-center mb-3">
          <span className="ms">MS</span>Matt Sarish (314) 304 2234
        </h5>
        <h5 className="flex items-center">
          <span className="js">JS</span>Joellen Sarish (739) 392 2945
        </h5>
      </div>
    </div>
    <h3>Academy Details</h3>
    <div className="grid grid-cols-2 p-5 gap-y-8">
      <div>
        <span>GPA</span>
        <h5>3.20</h5>
      </div>
      <div>
        <span>Major</span>
        <h5>Sports Management</h5>
      </div>
      <div>
        <span>Importance</span>
        <h5>Sports Importance</h5>
      </div>
    </div>

    <h3>College Roster Bio</h3>
    <div className="px-3">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni.
      </p>
      <a className="text-base font-semibold" href="#">
        Show more...
      </a>
    </div>
  </div>
);

const Stats = () => (
  <div>
    <div className="mb-10">
      <h3>Passing <span>89%</span></h3>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
    <div className="mb-10">
      <h3>Defense <span>49%</span></h3>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
    <div>
      <h3>Receiving <span>69%</span></h3>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  </div>
);
const GameLog = () => (
  <div>
    <h3>Welcome to GameLog</h3>
    <p>This is the GameLog tab content.</p>
  </div>
);

const Survey = () => (
  <div>
    <h2>Welcome to Survey</h2>
    <p>This is the Survey tab content.</p>
  </div>
);
const Notes = () => (
  <div>
    <h2>Welcome to Notes</h2>
    <p>This is the Notes tab content.</p>
  </div>
);

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Bio",
    children: <Bio />,
  },
  {
    key: "2",
    label: "Stats",
    children: <Stats />,
  },
  {
    key: "3",
    label: "Game Log",
    children: <GameLog />,
  },
  {
    key: "4",
    label: "Survey",
    children: <Survey />,
  },
  {
    key: "5",
    label: "Notes",
    children: <Notes />,
  },
];

export default function PlayerInformation() {
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      className="player-information"
    />
  );
}
