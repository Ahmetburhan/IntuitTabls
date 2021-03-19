import React from "react";
import { Box, Meter, Text, Tip } from "grommet";

const amountFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

export const columns = [
  {
    property: "id",
    header: <Text>Id</Text>,
    primary: true
  },
  {
    property: "createdAt",
    header: "Created At"
  },
  {
    property: "transaction_date",
    header: "Transaction Date",
    // render: (datum) =>
    //   datum.date && new Date(datum.date).toLocaleDateString("en-US"),
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
      console.log("datum", datum.reference);
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
    createdAt: "2021-03-18T20:13:10.533Z",
    transaction_date: "2020-11-03T20:57:02.304Z",
    reference: "payment",
    amount: "527.30"
  },
  {
    id: "2",
    createdAt: "2021-03-19T00:58:17.660Z",
    transaction_date: "2020-07-14T01:19:25.194Z",
    reference: "withdrawal",
    amount: "662.63"
  },
  {
    id: "3",
    createdAt: "2021-03-19T13:57:18.020Z",
    transaction_date: "2021-02-13T11:09:12.409Z",
    reference: "deposit",
    amount: "604.48"
  },
  {
    id: "4",
    createdAt: "2021-03-18T18:28:05.422Z",
    transaction_date: "2020-11-10T05:09:11.383Z",
    reference: "deposit",
    amount: "256.73"
  },
  {
    id: "5",
    createdAt: "2021-03-18T23:13:45.283Z",
    transaction_date: "2020-03-19T17:14:34.736Z",
    reference: "deposit",
    amount: "125.78"
  },
  {
    id: "6",
    createdAt: "2021-03-19T12:20:34.279Z",
    transaction_date: "2021-01-31T09:09:43.585Z",
    reference: "invoice",
    amount: "357.79"
  },
  {
    id: "7",
    createdAt: "2021-03-19T10:45:34.261Z",
    transaction_date: "2020-10-20T04:40:50.726Z",
    reference: "invoice",
    amount: "413.76"
  },
  {
    id: "8",
    createdAt: "2021-03-19T01:46:10.547Z",
    transaction_date: "2020-07-14T09:35:34.303Z",
    reference: "invoice",
    amount: "976.87"
  },
  {
    id: "9",
    createdAt: "2021-03-19T13:27:45.365Z",
    transaction_date: "2021-02-16T12:32:52.367Z",
    reference: "payment",
    amount: "268.58"
  },
  {
    id: "10",
    createdAt: "2021-03-18T21:39:09.725Z",
    transaction_date: "2020-05-03T12:06:22.049Z",
    reference: "payment",
    amount: "15.99"
  },
  {
    id: "11",
    createdAt: "2021-03-19T07:45:26.426Z",
    transaction_date: "2021-02-10T07:47:38.743Z",
    reference: "invoice",
    amount: "935.34"
  },
  {
    id: "12",
    createdAt: "2021-03-19T01:11:15.261Z",
    transaction_date: "2020-05-13T19:41:51.973Z",
    reference: "payment",
    amount: "716.83"
  },
  {
    id: "13",
    createdAt: "2021-03-19T15:01:40.764Z",
    transaction_date: "2020-07-09T04:00:05.718Z",
    reference: "payment",
    amount: "947.38"
  },
  {
    id: "14",
    createdAt: "2021-03-19T05:32:22.198Z",
    transaction_date: "2020-09-13T10:13:21.728Z",
    reference: "deposit",
    amount: "747.71"
  },
  {
    id: "15",
    createdAt: "2021-03-19T04:36:29.429Z",
    transaction_date: "2020-03-28T04:32:32.640Z",
    reference: "withdrawal",
    amount: "70.47"
  },
  {
    id: "16",
    createdAt: "2021-03-19T09:01:33.390Z",
    transaction_date: "2020-12-16T10:48:05.581Z",
    reference: "invoice",
    amount: "964.41"
  },
  {
    id: "17",
    createdAt: "2021-03-18T18:42:31.827Z",
    transaction_date: "2021-01-20T00:33:33.469Z",
    reference: "payment",
    amount: "439.99"
  },
  {
    id: "18",
    createdAt: "2021-03-19T01:43:14.090Z",
    transaction_date: "2020-06-21T22:21:14.191Z",
    reference: "deposit",
    amount: "380.97"
  },
  {
    id: "19",
    createdAt: "2021-03-18T18:31:31.528Z",
    transaction_date: "2020-09-24T19:24:39.155Z",
    reference: "withdrawal",
    amount: "410.23"
  },
  {
    id: "20",
    createdAt: "2021-03-19T09:27:18.022Z",
    transaction_date: "2020-07-27T11:42:49.533Z",
    reference: "deposit",
    amount: "24.65"
  },
  {
    id: "21",
    createdAt: "2021-03-19T16:24:24.256Z",
    transaction_date: "2020-06-05T13:10:42.761Z",
    reference: "deposit",
    amount: "449.79"
  },
  {
    id: "22",
    createdAt: "2021-03-19T02:20:17.273Z",
    transaction_date: "2020-06-30T12:41:17.352Z",
    reference: "deposit",
    amount: "520.55"
  },
  {
    id: "23",
    createdAt: "2021-03-19T06:01:00.724Z",
    transaction_date: "2020-06-01T00:40:54.273Z",
    reference: "deposit",
    amount: "537.14"
  },
  {
    id: "24",
    createdAt: "2021-03-18T23:21:18.895Z",
    transaction_date: "2020-05-07T20:12:15.065Z",
    reference: "withdrawal",
    amount: "672.59"
  },
  {
    id: "25",
    createdAt: "2021-03-19T08:35:59.302Z",
    transaction_date: "2021-02-04T22:39:54.623Z",
    reference: "payment",
    amount: "267.95"
  },
  {
    id: "26",
    createdAt: "2021-03-19T03:46:57.932Z",
    transaction_date: "2020-12-18T10:55:29.071Z",
    reference: "withdrawal",
    amount: "457.30"
  },
  {
    id: "27",
    createdAt: "2021-03-19T08:56:19.097Z",
    transaction_date: "2020-07-07T23:16:43.502Z",
    reference: "withdrawal",
    amount: "478.34"
  },
  {
    id: "28",
    createdAt: "2021-03-18T17:56:10.829Z",
    transaction_date: "2020-12-09T10:55:46.066Z",
    reference: "deposit",
    amount: "181.25"
  },
  {
    id: "29",
    createdAt: "2021-03-19T07:16:06.445Z",
    transaction_date: "2021-03-14T17:43:59.453Z",
    reference: "withdrawal",
    amount: "143.95"
  },
  {
    id: "30",
    createdAt: "2021-03-19T14:26:16.611Z",
    transaction_date: "2020-06-21T13:44:23.716Z",
    reference: "invoice",
    amount: "817.53"
  },
  {
    id: "31",
    createdAt: "2021-03-19T03:41:03.344Z",
    transaction_date: "2021-01-01T14:57:11.065Z",
    reference: "payment",
    amount: "606.80"
  },
  {
    id: "32",
    createdAt: "2021-03-19T06:20:08.161Z",
    transaction_date: "2020-09-01T08:32:09.646Z",
    reference: "payment",
    amount: "436.25"
  },
  {
    id: "33",
    createdAt: "2021-03-19T03:57:19.706Z",
    transaction_date: "2021-01-04T10:33:07.118Z",
    reference: "payment",
    amount: "374.44"
  },
  {
    id: "34",
    createdAt: "2021-03-19T10:14:04.327Z",
    transaction_date: "2020-09-20T10:39:26.371Z",
    reference: "withdrawal",
    amount: "309.68"
  },
  {
    id: "35",
    createdAt: "2021-03-18T21:29:58.787Z",
    transaction_date: "2020-05-08T21:08:02.099Z",
    reference: "withdrawal",
    amount: "838.92"
  },
  {
    id: "36",
    createdAt: "2021-03-19T01:02:14.385Z",
    transaction_date: "2020-10-10T02:33:39.711Z",
    reference: "payment",
    amount: "783.14"
  },
  {
    id: "37",
    createdAt: "2021-03-19T04:53:34.533Z",
    transaction_date: "2020-04-28T01:06:08.255Z",
    reference: "invoice",
    amount: "837.40"
  },
  {
    id: "38",
    createdAt: "2021-03-19T10:52:46.024Z",
    transaction_date: "2020-11-25T16:02:08.469Z",
    reference: "withdrawal",
    amount: "73.36"
  },
  {
    id: "39",
    createdAt: "2021-03-19T09:54:28.797Z",
    transaction_date: "2020-11-02T11:56:10.048Z",
    reference: "deposit",
    amount: "377.21"
  },
  {
    id: "40",
    createdAt: "2021-03-19T16:10:11.718Z",
    transaction_date: "2021-02-18T17:45:10.981Z",
    reference: "invoice",
    amount: "625.80"
  },
  {
    id: "41",
    createdAt: "2021-03-19T14:56:31.989Z",
    transaction_date: "2020-07-24T13:35:11.667Z",
    reference: "deposit",
    amount: "599.48"
  },
  {
    id: "42",
    createdAt: "2021-03-19T04:35:53.221Z",
    transaction_date: "2020-07-24T01:34:21.892Z",
    reference: "payment",
    amount: "893.23"
  },
  {
    id: "43",
    createdAt: "2021-03-19T13:23:02.657Z",
    transaction_date: "2021-02-19T11:23:35.311Z",
    reference: "payment",
    amount: "117.61"
  },
  {
    id: "44",
    createdAt: "2021-03-19T11:32:05.460Z",
    transaction_date: "2020-10-20T08:15:03.056Z",
    reference: "invoice",
    amount: "889.28"
  },
  {
    id: "45",
    createdAt: "2021-03-18T21:40:18.214Z",
    transaction_date: "2020-06-17T17:00:15.429Z",
    reference: "deposit",
    amount: "0.48"
  },
  {
    id: "46",
    createdAt: "2021-03-18T16:43:48.138Z",
    transaction_date: "2020-11-08T14:22:31.395Z",
    reference: "invoice",
    amount: "696.51"
  },
  {
    id: "47",
    createdAt: "2021-03-19T00:24:47.298Z",
    transaction_date: "2021-03-16T01:24:35.832Z",
    reference: "deposit",
    amount: "976.62"
  },
  {
    id: "48",
    createdAt: "2021-03-19T00:49:37.583Z",
    transaction_date: "2020-08-06T14:39:05.294Z",
    reference: "withdrawal",
    amount: "778.65"
  },
  {
    id: "49",
    createdAt: "2021-03-19T03:24:43.277Z",
    transaction_date: "2021-02-09T18:58:30.192Z",
    reference: "payment",
    amount: "193.85"
  },
  {
    id: "50",
    createdAt: "2021-03-19T07:58:56.092Z",
    transaction_date: "2020-07-14T01:17:43.730Z",
    reference: "deposit",
    amount: "176.31"
  },
  {
    id: "51",
    createdAt: "2021-03-19T04:06:13.498Z",
    transaction_date: "2021-01-07T07:39:21.301Z",
    reference: "payment",
    amount: "133.56"
  },
  {
    id: "52",
    createdAt: "2021-03-19T07:55:23.832Z",
    transaction_date: "2020-05-28T17:12:25.541Z",
    reference: "withdrawal",
    amount: "445.02"
  },
  {
    id: "53",
    createdAt: "2021-03-19T11:50:32.851Z",
    transaction_date: "2020-12-20T16:42:23.728Z",
    reference: "payment",
    amount: "898.52"
  },
  {
    id: "54",
    createdAt: "2021-03-19T12:09:54.191Z",
    transaction_date: "2021-01-03T02:14:32.722Z",
    reference: "deposit",
    amount: "404.80"
  },
  {
    id: "55",
    createdAt: "2021-03-19T04:21:32.896Z",
    transaction_date: "2021-03-09T18:25:03.848Z",
    reference: "withdrawal",
    amount: "591.50"
  },
  {
    id: "56",
    createdAt: "2021-03-19T14:55:10.452Z",
    transaction_date: "2020-04-22T16:33:24.129Z",
    reference: "invoice",
    amount: "255.80"
  },
  {
    id: "57",
    createdAt: "2021-03-19T13:18:07.462Z",
    transaction_date: "2021-02-21T22:36:11.341Z",
    reference: "invoice",
    amount: "640.01"
  },
  {
    id: "58",
    createdAt: "2021-03-19T15:19:35.614Z",
    transaction_date: "2020-04-14T11:32:33.678Z",
    reference: "deposit",
    amount: "434.44"
  },
  {
    id: "59",
    createdAt: "2021-03-19T11:06:43.472Z",
    transaction_date: "2020-10-07T19:21:27.774Z",
    reference: "invoice",
    amount: "417.84"
  },
  {
    id: "60",
    createdAt: "2021-03-18T20:06:56.564Z",
    transaction_date: "2020-11-27T06:46:34.604Z",
    reference: "withdrawal",
    amount: "631.31"
  },
  {
    id: "61",
    createdAt: "2021-03-19T06:50:13.871Z",
    transaction_date: "2020-12-19T11:18:12.060Z",
    reference: "withdrawal",
    amount: "727.30"
  },
  {
    id: "62",
    createdAt: "2021-03-19T14:02:52.420Z",
    transaction_date: "2020-10-18T10:26:41.933Z",
    reference: "withdrawal",
    amount: "858.17"
  },
  {
    id: "63",
    createdAt: "2021-03-19T14:04:25.186Z",
    transaction_date: "2020-04-17T03:55:30.234Z",
    reference: "invoice",
    amount: "114.20"
  },
  {
    id: "64",
    createdAt: "2021-03-19T12:08:08.181Z",
    transaction_date: "2020-07-26T11:10:43.334Z",
    reference: "payment",
    amount: "96.62"
  }
];
