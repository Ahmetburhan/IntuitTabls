import React from "react";
import { Box, Text, Avatar } from "grommet";
import moment from "moment";
const amountFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

/** 
 id: "1",
    createdAt: 1616175346,
    name: "Karli Hayes Sr.",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/estebanuribe/128.jpg",
    reference: 35,
    paid_time: 1616175346,
    invoice: 1616175346,
    amount: "399.57",
    status: false
  },
 */

export const columns = [
  {
    property: "id",
    header: <Text>Id</Text>,
    primary: true
  },
  {
    property: "name",
    header: <Text>name</Text>,
    render: (datum) => {
      return (
        <Box direction="row" pad="large" gap="small">
          <Avatar size="medium" background="dark-2">
            {datum && datum.name.split(" ").map((each) => each[0])}
          </Avatar>
          <Text>{datum.name}</Text>
        </Box>
      );
    }
  },

  {
    property: "avatar",
    header: "Amount",
    render: (datum) => {
      // cases payment deposit invoice withdraw
      return (
        <Text
          color={
            datum.reference == "withdrawal" || datum.reference == "payment"
              ? "red"
              : "green"
          }
        >
          {(datum && datum.reference == "withdrawal") ||
          datum.reference == "payment"
            ? `(-${amountFormatter.format(datum.amount)})`
            : amountFormatter.format(datum.amount)}
        </Text>
      );
    },
    align: "end"
    // aggregate: "sum",
    // footer: { aggregate: true }
  },
  {
    property: "createdAt",
    render: (datum) => moment.unix(datum.createdAt).format("MM/DD/YYYY"),
    header: "Created At"
  },
  {
    property: "paid_time",
    header: "Paid",
    render: (datum) => moment.unix(datum.paid_time).format("MM/DD/YYYY"),
    align: "end"
  },
  {
    property: "reference",
    header: "Reference",
    // render: (datum) =>
    //   datum.date && new Date(datum.date).toLocaleDateString("en-US"),
    align: "center"
  },
  {
    property: "amount",
    header: "Amount",
    render: (datum) => {
      // cases payment deposit invoice withdraw
      return (
        <Text
          color={
            datum.reference == "withdrawal" || datum.reference == "payment"
              ? "red"
              : "green"
          }
        >
          {(datum && datum.reference == "withdrawal") ||
          datum.reference == "payment"
            ? `(-${amountFormatter.format(datum.amount)})`
            : amountFormatter.format(datum.amount)}
        </Text>
      );
    },
    align: "end"
    // aggregate: "sum",
    // footer: { aggregate: true }
  }
];

export const DATA = [
  {
    id: "1",
    createdAt: 1616221218,
    name: "Elinore Stokes",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/iamkeithmason/128.jpg",
    reference: 48,
    paid_time: "2021-03-20T00:37:52.003Z",
    invoice: "2020-04-13T20:54:55.189Z",
    amount: "532.16",
    status: false
  },
  {
    id: "2",
    createdAt: 1616221158,
    name: "Odell Hoeger",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/9lessons/128.jpg",
    reference: 14,
    paid_time: "2021-03-20T01:05:09.768Z",
    invoice: "2020-11-04T22:59:32.675Z",
    amount: "475.12",
    status: false
  },
  {
    id: "3",
    createdAt: 1616221098,
    name: "Gunnar Kessler",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vj_demien/128.jpg",
    reference: 70,
    paid_time: "2021-03-19T11:20:03.751Z",
    invoice: "2021-01-13T22:48:00.139Z",
    amount: "757.62",
    status: false
  },
  {
    id: "4",
    createdAt: 1616221038,
    name: "Gilbert Bogan",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/anaami/128.jpg",
    reference: 6,
    paid_time: "2021-03-19T15:23:52.497Z",
    invoice: "2020-08-07T21:29:53.425Z",
    amount: "183.56",
    status: false
  },
  {
    id: "5",
    createdAt: 1616220978,
    name: "Burnice Runolfsson Jr.",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/jacksonlatka/128.jpg",
    reference: 28,
    paid_time: "2021-03-19T16:45:19.644Z",
    invoice: "2020-04-29T12:42:16.703Z",
    amount: "619.96",
    status: false
  },
  {
    id: "6",
    createdAt: 1616220918,
    name: "Rylee Kunde I",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ankitind/128.jpg",
    reference: 54,
    paid_time: "2021-03-20T00:47:38.540Z",
    invoice: "2020-08-13T10:55:40.739Z",
    amount: "939.86",
    status: false
  },
  {
    id: "7",
    createdAt: 1616220858,
    name: "Robb Von",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/xalionmalik/128.jpg",
    reference: 41,
    paid_time: "2021-03-19T16:29:18.511Z",
    invoice: "2020-08-03T20:12:47.630Z",
    amount: "137.89",
    status: false
  },
  {
    id: "8",
    createdAt: 1616220798,
    name: "Mrs. Desiree Gusikowski",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bowbrick/128.jpg",
    reference: 73,
    paid_time: "2021-03-20T00:52:23.929Z",
    invoice: "2020-07-19T16:36:58.210Z",
    amount: "592.90",
    status: false
  },
  {
    id: "9",
    createdAt: 1616220738,
    name: "Elna Rowe IV",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/aaronalfred/128.jpg",
    reference: 83,
    paid_time: "2021-03-19T22:49:27.387Z",
    invoice: "2020-09-27T13:47:03.449Z",
    amount: "813.65",
    status: false
  },
  {
    id: "10",
    createdAt: 1616220678,
    name: "Ryley Spencer",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jayphen/128.jpg",
    reference: 29,
    paid_time: "2021-03-19T07:26:08.825Z",
    invoice: "2020-08-23T12:07:48.094Z",
    amount: "463.90",
    status: false
  },
  {
    id: "11",
    createdAt: 1616220618,
    name: "Tyra Hamill",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/mbilalsiddique1/128.jpg",
    reference: 68,
    paid_time: "2021-03-19T14:15:40.000Z",
    invoice: "2020-12-28T04:14:29.416Z",
    amount: "244.04",
    status: false
  },
  {
    id: "12",
    createdAt: 1616220558,
    name: "Lloyd Watsica",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nehfy/128.jpg",
    reference: 26,
    paid_time: "2021-03-20T05:49:55.595Z",
    invoice: "2020-09-08T20:10:45.478Z",
    amount: "576.49",
    status: false
  },
  {
    id: "13",
    createdAt: 1616220498,
    name: "Mr. Camryn Ullrich",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/iamjdeleon/128.jpg",
    reference: 85,
    paid_time: "2021-03-19T19:32:08.954Z",
    invoice: "2021-03-12T02:31:57.540Z",
    amount: "626.62",
    status: false
  },
  {
    id: "14",
    createdAt: 1616220438,
    name: "Odessa Kreiger",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/n1ght_coder/128.jpg",
    reference: 24,
    paid_time: "2021-03-19T09:39:23.262Z",
    invoice: "2020-08-29T06:46:32.555Z",
    amount: "900.75",
    status: false
  },
  {
    id: "15",
    createdAt: 1616220378,
    name: "Arely Ferry II",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/sawrb/128.jpg",
    reference: 4,
    paid_time: "2021-03-19T23:46:36.195Z",
    invoice: "2021-03-20T00:33:49.372Z",
    amount: "415.84",
    status: false
  },
  {
    id: "16",
    createdAt: 1616220318,
    name: "Ms. Roy Bednar",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/chaabane_wail/128.jpg",
    reference: 35,
    paid_time: "2021-03-20T04:58:52.902Z",
    invoice: "2020-05-17T00:57:46.981Z",
    amount: "508.32",
    status: false
  },
  {
    id: "17",
    createdAt: 1616220258,
    name: "Elizabeth Reichert",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/jamiebrittain/128.jpg",
    reference: 42,
    paid_time: "2021-03-19T16:22:06.971Z",
    invoice: "2020-07-04T15:10:06.037Z",
    amount: "460.41",
    status: false
  },
  {
    id: "18",
    createdAt: 1616220198,
    name: "Ludwig Boyer MD",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/artvavs/128.jpg",
    reference: 20,
    paid_time: "2021-03-20T00:58:39.172Z",
    invoice: "2020-12-27T21:35:59.933Z",
    amount: "812.30",
    status: false
  },
  {
    id: "19",
    createdAt: 1616220138,
    name: "Davion Murray",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/abdullindenis/128.jpg",
    reference: 20,
    paid_time: "2021-03-19T20:22:18.707Z",
    invoice: "2020-07-20T22:10:44.971Z",
    amount: "280.56",
    status: false
  },
  {
    id: "20",
    createdAt: 1616220078,
    name: "Steve Hyatt",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hugomano/128.jpg",
    reference: 10,
    paid_time: "2021-03-20T06:11:13.225Z",
    invoice: "2020-10-20T00:37:31.376Z",
    amount: "35.04",
    status: false
  },
  {
    id: "21",
    createdAt: 1616220018,
    name: "Rowena Murazik",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/reabo101/128.jpg",
    reference: 18,
    paid_time: "2021-03-20T01:32:12.658Z",
    invoice: "2020-05-11T02:06:19.369Z",
    amount: "451.81",
    status: false
  },
  {
    id: "22",
    createdAt: 1616219958,
    name: "Randall Marquardt",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/jodytaggart/128.jpg",
    reference: 92,
    paid_time: "2021-03-19T20:01:50.678Z",
    invoice: "2020-09-15T04:55:06.138Z",
    amount: "474.02",
    status: false
  },
  {
    id: "23",
    createdAt: 1616219898,
    name: "Prudence Hodkiewicz",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/brenton_clarke/128.jpg",
    reference: 11,
    paid_time: "2021-03-19T18:08:24.100Z",
    invoice: "2020-04-15T16:17:02.718Z",
    amount: "0.27",
    status: false
  },
  {
    id: "24",
    createdAt: 1616219838,
    name: "Francesca Collier",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jakemoore/128.jpg",
    reference: 43,
    paid_time: "2021-03-19T21:35:06.794Z",
    invoice: "2020-11-26T23:22:19.783Z",
    amount: "660.31",
    status: false
  },
  {
    id: "25",
    createdAt: 1616219778,
    name: "Rowan Murphy",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/caseycavanagh/128.jpg",
    reference: 98,
    paid_time: "2021-03-20T02:22:12.068Z",
    invoice: "2020-12-27T17:53:58.702Z",
    amount: "831.30",
    status: false
  },
  {
    id: "26",
    createdAt: 1616219718,
    name: "Zachary Dickens DVM",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/lvovenok/128.jpg",
    reference: 3,
    paid_time: "2021-03-19T09:40:43.230Z",
    invoice: "2020-12-08T11:59:52.008Z",
    amount: "872.13",
    status: false
  },
  {
    id: "27",
    createdAt: 1616219658,
    name: "Ismael O'Reilly",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rdbannon/128.jpg",
    reference: 71,
    paid_time: "2021-03-19T12:48:51.214Z",
    invoice: "2020-11-08T02:14:43.384Z",
    amount: "256.11",
    status: false
  },
  {
    id: "28",
    createdAt: 1616219598,
    name: "Kenneth Heidenreich",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kennyadr/128.jpg",
    reference: 64,
    paid_time: "2021-03-19T16:47:03.393Z",
    invoice: "2020-08-19T10:26:27.389Z",
    amount: "12.45",
    status: false
  },
  {
    id: "29",
    createdAt: 1616219538,
    name: "Ruben Leannon",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg",
    reference: 95,
    paid_time: "2021-03-20T06:07:10.260Z",
    invoice: "2020-09-13T07:41:49.963Z",
    amount: "359.52",
    status: false
  },
  {
    id: "30",
    createdAt: 1616219478,
    name: "Velma Gleason",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rdbannon/128.jpg",
    reference: 67,
    paid_time: "2021-03-20T01:04:37.646Z",
    invoice: "2020-11-12T16:04:25.586Z",
    amount: "426.14",
    status: false
  },
  {
    id: "31",
    createdAt: 1616219418,
    name: "Garret Abshire",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rtyukmaev/128.jpg",
    reference: 3,
    paid_time: "2021-03-20T04:20:04.072Z",
    invoice: "2021-03-01T08:50:01.677Z",
    amount: "667.99",
    status: false
  },
  {
    id: "32",
    createdAt: 1616219358,
    name: "Ms. Maritza Bruen",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dudestein/128.jpg",
    reference: 81,
    paid_time: "2021-03-19T14:03:56.127Z",
    invoice: "2021-01-08T23:55:07.999Z",
    amount: "689.81",
    status: false
  },
  {
    id: "33",
    createdAt: 1616219298,
    name: "Quentin Kirlin",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/puzik/128.jpg",
    reference: 70,
    paid_time: "2021-03-19T16:34:01.303Z",
    invoice: "2020-08-01T06:14:41.641Z",
    amount: "263.78",
    status: false
  },
  {
    id: "34",
    createdAt: 1616219238,
    name: "Eliza Parker",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/jacobbennett/128.jpg",
    reference: 76,
    paid_time: "2021-03-19T13:16:29.998Z",
    invoice: "2020-07-17T22:35:09.825Z",
    amount: "420.20",
    status: false
  },
  {
    id: "35",
    createdAt: 1616219178,
    name: "Miss Mary Kunde",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/mufaddal_mw/128.jpg",
    reference: 41,
    paid_time: "2021-03-19T15:35:51.691Z",
    invoice: "2021-02-12T16:41:31.805Z",
    amount: "635.62",
    status: false
  },
  {
    id: "36",
    createdAt: 1616219118,
    name: "Burley Lebsack",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/sokaniwaal/128.jpg",
    reference: 64,
    paid_time: "2021-03-19T15:52:27.894Z",
    invoice: "2020-05-24T08:36:19.142Z",
    amount: "340.81",
    status: false
  },
  {
    id: "37",
    createdAt: 1616219058,
    name: "Deondre Wehner",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/greenbes/128.jpg",
    reference: 9,
    paid_time: "2021-03-20T06:12:17.563Z",
    invoice: "2021-02-05T15:32:48.036Z",
    amount: "766.66",
    status: false
  },
  {
    id: "38",
    createdAt: 1616218998,
    name: "Gust Kovacek",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/plbabin/128.jpg",
    reference: 68,
    paid_time: "2021-03-19T16:48:39.218Z",
    invoice: "2020-06-14T22:49:09.050Z",
    amount: "346.84",
    status: false
  },
  {
    id: "39",
    createdAt: 1616218938,
    name: "Shakira Ebert",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/randomlies/128.jpg",
    reference: 11,
    paid_time: "2021-03-20T03:33:21.527Z",
    invoice: "2021-03-15T01:50:03.842Z",
    amount: "353.20",
    status: false
  },
  {
    id: "40",
    createdAt: 1616218878,
    name: "Kaitlyn Erdman",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/sangdth/128.jpg",
    reference: 56,
    paid_time: "2021-03-19T08:15:57.227Z",
    invoice: "2020-12-28T14:00:38.382Z",
    amount: "804.50",
    status: false
  },
  {
    id: "41",
    createdAt: 1616218818,
    name: "Demetris Bogan",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ateneupopular/128.jpg",
    reference: 68,
    paid_time: "2021-03-19T21:56:50.743Z",
    invoice: "2021-02-11T19:31:10.479Z",
    amount: "901.49",
    status: false
  },
  {
    id: "42",
    createdAt: 1616218758,
    name: "Eduardo Bednar",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/9lessons/128.jpg",
    reference: 64,
    paid_time: "2021-03-20T04:59:39.046Z",
    invoice: "2020-11-19T02:24:32.487Z",
    amount: "264.44",
    status: false
  },
  {
    id: "43",
    createdAt: 1616218698,
    name: "Layne Dietrich",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/jeremyshimko/128.jpg",
    reference: 16,
    paid_time: "2021-03-19T22:07:04.377Z",
    invoice: "2020-04-20T19:33:15.199Z",
    amount: "428.92",
    status: false
  },
  {
    id: "44",
    createdAt: 1616218638,
    name: "Dr. Lydia Schulist",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jedbridges/128.jpg",
    reference: 78,
    paid_time: "2021-03-19T16:55:36.211Z",
    invoice: "2020-04-20T23:43:12.762Z",
    amount: "884.83",
    status: false
  },
  {
    id: "45",
    createdAt: 1616218578,
    name: "Gaylord Pouros",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mds/128.jpg",
    reference: 42,
    paid_time: "2021-03-19T11:45:11.803Z",
    invoice: "2020-09-08T03:17:37.664Z",
    amount: "596.32",
    status: false
  },
  {
    id: "46",
    createdAt: 1616218518,
    name: "Keeley Gerlach",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/janpalounek/128.jpg",
    reference: 65,
    paid_time: "2021-03-20T01:27:39.988Z",
    invoice: "2020-06-22T00:50:47.326Z",
    amount: "498.46",
    status: false
  },
  {
    id: "47",
    createdAt: 1616218458,
    name: "Fernando Volkman",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/xilantra/128.jpg",
    reference: 24,
    paid_time: "2021-03-19T20:17:30.731Z",
    invoice: "2021-01-02T22:37:34.583Z",
    amount: "671.08",
    status: false
  },
  {
    id: "48",
    createdAt: 1616218398,
    name: "Karlee Deckow",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/joshaustin/128.jpg",
    reference: 86,
    paid_time: "2021-03-19T21:51:43.880Z",
    invoice: "2020-08-18T03:36:15.657Z",
    amount: "824.02",
    status: false
  },
  {
    id: "49",
    createdAt: 1616218338,
    name: "Katrine Schamberger DVM",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nehfy/128.jpg",
    reference: 37,
    paid_time: "2021-03-20T05:22:36.066Z",
    invoice: "2020-05-31T08:13:06.964Z",
    amount: "264.73",
    status: false
  },
  {
    id: "50",
    createdAt: 1616218278,
    name: "Dortha Stracke",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/BryanHorsey/128.jpg",
    reference: 14,
    paid_time: "2021-03-19T10:27:03.233Z",
    invoice: "2021-01-20T07:50:28.672Z",
    amount: "827.54",
    status: false
  },
  {
    id: "51",
    createdAt: 1616218218,
    name: "Oda Durgan",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ZacharyZorbas/128.jpg",
    reference: 68,
    paid_time: "2021-03-19T11:28:15.668Z",
    invoice: "2020-09-17T00:48:27.867Z",
    amount: "479.71",
    status: false
  }
];
