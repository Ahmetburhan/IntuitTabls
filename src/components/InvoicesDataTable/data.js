import React from "react";
import { Box, Meter, Text, Tip } from "grommet";

const amountFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

/** 
 *  "id": "1",
    "createdAt": 1616175346,
    "name": "Karli Hayes Sr.",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/estebanuribe/128.jpg",
    "reference": 35,
    "paid_time": 1616175346,
    "invoice": 1616175346,
    "amount": "399.57",
    "status": false
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
  {
    id: "2",
    createdAt: 1616175286,
    name: "Wendy Weissnat",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josevnclch/128.jpg",
    reference: 49,
    paid_time: 1616175286,
    invoice: 1616175286,
    amount: "414.11",
    status: false
  },
  {
    id: "3",
    createdAt: 1616175226,
    name: "Amira O'Connell",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/prrstn/128.jpg",
    reference: 23,
    paid_time: 1616175226,
    invoice: 1616175226,
    amount: "645.69",
    status: false
  },
  {
    id: "4",
    createdAt: 1616175166,
    name: "Maida Dach",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/amandabuzard/128.jpg",
    reference: 73,
    paid_time: 1616175166,
    invoice: 1616175166,
    amount: "161.45",
    status: false
  },
  {
    id: "5",
    createdAt: 1616175106,
    name: "Germaine Friesen",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/frankiefreesbie/128.jpg",
    reference: 70,
    paid_time: 1616175106,
    invoice: 1616175106,
    amount: "82.53",
    status: false
  },
  {
    id: "6",
    createdAt: 1616175046,
    name: "Katharina Breitenberg",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mighty55/128.jpg",
    reference: 31,
    paid_time: 1616175046,
    invoice: 1616175046,
    amount: "743.60",
    status: false
  },
  {
    id: "7",
    createdAt: 1616174986,
    name: "Myrtie Walter",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/arkokoley/128.jpg",
    reference: 93,
    paid_time: 1616174986,
    invoice: 1616174986,
    amount: "569.33",
    status: false
  },
  {
    id: "8",
    createdAt: 1616174926,
    name: "Kayden Ryan",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg",
    reference: 66,
    paid_time: 1616174926,
    invoice: 1616174926,
    amount: "125.70",
    status: false
  },
  {
    id: "9",
    createdAt: 1616174866,
    name: "Hershel Anderson",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/aaronkwhite/128.jpg",
    reference: 92,
    paid_time: 1616174866,
    invoice: 1616174866,
    amount: "278.09",
    status: false
  },
  {
    id: "10",
    createdAt: 1616174806,
    name: "Yazmin Reilly IV",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/begreative/128.jpg",
    reference: 81,
    paid_time: 1616174806,
    invoice: 1616174806,
    amount: "16.76",
    status: false
  },
  {
    id: "11",
    createdAt: 1616174746,
    name: "Doyle Rohan",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/javorszky/128.jpg",
    reference: 8,
    paid_time: 1616174746,
    invoice: 1616174746,
    amount: "478.02",
    status: false
  },
  {
    id: "12",
    createdAt: 1616174686,
    name: "Geoffrey Satterfield",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/embrcecreations/128.jpg",
    reference: 97,
    paid_time: 1616174686,
    invoice: 1616174686,
    amount: "33.51",
    status: false
  },
  {
    id: "13",
    createdAt: 1616174626,
    name: "Jettie Gutmann",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/pyronite/128.jpg",
    reference: 1,
    paid_time: 1616174626,
    invoice: 1616174626,
    amount: "115.07",
    status: false
  },
  {
    id: "14",
    createdAt: 1616174566,
    name: "Enid Rodriguez",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/smalonso/128.jpg",
    reference: 96,
    paid_time: 1616174566,
    invoice: 1616174566,
    amount: "487.16",
    status: false
  },
  {
    id: "15",
    createdAt: 1616174506,
    name: "Elena Emmerich",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/itstotallyamy/128.jpg",
    reference: 47,
    paid_time: 1616174506,
    invoice: 1616174506,
    amount: "300.70",
    status: false
  },
  {
    id: "16",
    createdAt: 1616174446,
    name: "Christopher Lowe",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dannol/128.jpg",
    reference: 18,
    paid_time: 1616174446,
    invoice: 1616174446,
    amount: "661.98",
    status: false
  },
  {
    id: "17",
    createdAt: 1616174386,
    name: "Jeffry Sawayn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/missaaamy/128.jpg",
    reference: 84,
    paid_time: 1616174386,
    invoice: 1616174386,
    amount: "479.18",
    status: false
  },
  {
    id: "18",
    createdAt: 1616174326,
    name: "Garland Wolff",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/geobikas/128.jpg",
    reference: 71,
    paid_time: 1616174326,
    invoice: 1616174326,
    amount: "305.51",
    status: false
  },
  {
    id: "19",
    createdAt: 1616174266,
    name: "Halle Cartwright",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/Shriiiiimp/128.jpg",
    reference: 68,
    paid_time: 1616174266,
    invoice: 1616174266,
    amount: "177.39",
    status: false
  },
  {
    id: "20",
    createdAt: 1616174206,
    name: "Hester Huels",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/fotomagin/128.jpg",
    reference: 65,
    paid_time: 1616174206,
    invoice: 1616174206,
    amount: "861.48",
    status: false
  },
  {
    id: "21",
    createdAt: 1616174146,
    name: "Jon Shields Sr.",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/brandonflatsoda/128.jpg",
    reference: 68,
    paid_time: 1616174146,
    invoice: 1616174146,
    amount: "79.39",
    status: false
  },
  {
    id: "22",
    createdAt: 1616174086,
    name: "Damaris Schmeler",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/emileboudeling/128.jpg",
    reference: 67,
    paid_time: 1616174086,
    invoice: 1616174086,
    amount: "263.17",
    status: false
  },
  {
    id: "23",
    createdAt: 1616174026,
    name: "Hadley Maggio",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/arashmanteghi/128.jpg",
    reference: 37,
    paid_time: 1616174026,
    invoice: 1616174026,
    amount: "896.67",
    status: false
  },
  {
    id: "24",
    createdAt: 1616173966,
    name: "Mr. Amir Towne",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mutlu82/128.jpg",
    reference: 24,
    paid_time: 1616173966,
    invoice: 1616173966,
    amount: "451.59",
    status: false
  },
  {
    id: "25",
    createdAt: 1616173906,
    name: "Ms. Verna Adams",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/otozk/128.jpg",
    reference: 73,
    paid_time: 1616173906,
    invoice: 1616173906,
    amount: "127.56",
    status: false
  },
  {
    id: "26",
    createdAt: 1616174993,
    name: "Alvera Legros",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/souperphly/128.jpg",
    reference: 96,
    paid_time: 1616174993,
    invoice: 1616174993,
    amount: "112.27",
    status: false
  },
  {
    id: "27",
    createdAt: 1616174933,
    name: "Nick Kunde",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/lowie/128.jpg",
    reference: 48,
    paid_time: 1616174933,
    invoice: 1616174933,
    amount: "976.83",
    status: false
  },
  {
    id: "28",
    createdAt: 1616174873,
    name: "Maxime Lynch",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/andrewcohen/128.jpg",
    reference: 45,
    paid_time: 1616174873,
    invoice: 1616174873,
    amount: "936.51",
    status: false
  },
  {
    id: "29",
    createdAt: 1616174813,
    name: "Brenna Casper",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rmlewisuk/128.jpg",
    reference: 44,
    paid_time: 1616174813,
    invoice: 1616174813,
    amount: "958.87",
    status: false
  },
  {
    id: "30",
    createdAt: 1616174753,
    name: "Mr. Julianne Dicki",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/aeon56/128.jpg",
    reference: 95,
    paid_time: 1616174753,
    invoice: 1616174753,
    amount: "843.77",
    status: false
  },
  {
    id: "31",
    createdAt: 1616174693,
    name: "Emanuel Hickle",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/abotap/128.jpg",
    reference: 15,
    paid_time: 1616174693,
    invoice: 1616174693,
    amount: "330.46",
    status: false
  },
  {
    id: "32",
    createdAt: 1616174633,
    name: "Grayce Langworth",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ifarafonow/128.jpg",
    reference: 0,
    paid_time: 1616174633,
    invoice: 1616174633,
    amount: "352.80",
    status: false
  },
  {
    id: "33",
    createdAt: 1616174573,
    name: "Jacinto Baumbach",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/begreative/128.jpg",
    reference: 96,
    paid_time: 1616174573,
    invoice: 1616174573,
    amount: "771.10",
    status: false
  },
  {
    id: "34",
    createdAt: 1616174513,
    name: "Vern Kunde",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/benoitboucart/128.jpg",
    reference: 72,
    paid_time: 1616174513,
    invoice: 1616174513,
    amount: "629.95",
    status: false
  },
  {
    id: "35",
    createdAt: 1616174453,
    name: "Christiana Ritchie",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rude/128.jpg",
    reference: 36,
    paid_time: 1616174453,
    invoice: 1616174453,
    amount: "161.01",
    status: false
  },
  {
    id: "36",
    createdAt: 1616174393,
    name: "Dr. Sandrine Bosco",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/horaciobella/128.jpg",
    reference: 88,
    paid_time: 1616174393,
    invoice: 1616174393,
    amount: "171.28",
    status: false
  },
  {
    id: "37",
    createdAt: 1616174333,
    name: "Cecilia Williamson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kosmar/128.jpg",
    reference: 71,
    paid_time: 1616174333,
    invoice: 1616174333,
    amount: "212.01",
    status: false
  },
  {
    id: "38",
    createdAt: 1616174273,
    name: "Fred Kuphal",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/desastrozo/128.jpg",
    reference: 63,
    paid_time: 1616174273,
    invoice: 1616174273,
    amount: "528.15",
    status: false
  },
  {
    id: "39",
    createdAt: 1616174213,
    name: "Elian O'Keefe",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mattsapii/128.jpg",
    reference: 97,
    paid_time: 1616174213,
    invoice: 1616174213,
    amount: "953.32",
    status: false
  },
  {
    id: "40",
    createdAt: 1616174153,
    name: "Stefanie Connelly",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ivanfilipovbg/128.jpg",
    reference: 15,
    paid_time: 1616174153,
    invoice: 1616174153,
    amount: "231.09",
    status: false
  },
  {
    id: "41",
    createdAt: 1616174093,
    name: "Kirsten Koelpin",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/timothycd/128.jpg",
    reference: 66,
    paid_time: 1616174093,
    invoice: 1616174093,
    amount: "481.95",
    status: false
  },
  {
    id: "42",
    createdAt: 1616174033,
    name: "Paxton Toy",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/fabbrucci/128.jpg",
    reference: 34,
    paid_time: 1616174033,
    invoice: 1616174033,
    amount: "612.45",
    status: false
  },
  {
    id: "43",
    createdAt: 1616173973,
    name: "Dee Lakin",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stayuber/128.jpg",
    reference: 32,
    paid_time: 1616173973,
    invoice: 1616173973,
    amount: "971.74",
    status: false
  },
  {
    id: "44",
    createdAt: 1616173913,
    name: "Lorna Wiza",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/alsobrooks/128.jpg",
    reference: 53,
    paid_time: 1616173913,
    invoice: 1616173913,
    amount: "64.27",
    status: false
  },
  {
    id: "45",
    createdAt: 1616173853,
    name: "Taya Mayer Sr.",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/fluidbrush/128.jpg",
    reference: 20,
    paid_time: 1616173853,
    invoice: 1616173853,
    amount: "528.98",
    status: false
  },
  {
    id: "46",
    createdAt: 1616173793,
    name: "Colin Pagac",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/gauravjassal/128.jpg",
    reference: 94,
    paid_time: 1616173793,
    invoice: 1616173793,
    amount: "403.71",
    status: false
  },
  {
    id: "47",
    createdAt: 1616173733,
    name: "Pierce Emmerich",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vj_demien/128.jpg",
    reference: 57,
    paid_time: 1616173733,
    invoice: 1616173733,
    amount: "629.85",
    status: false
  },
  {
    id: "48",
    createdAt: 1616173673,
    name: "Ethyl Metz IV",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/thatonetommy/128.jpg",
    reference: 66,
    paid_time: 1616173673,
    invoice: 1616173673,
    amount: "391.96",
    status: false
  },
  {
    id: "49",
    createdAt: 1616173613,
    name: "Althea Tremblay",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/xiel/128.jpg",
    reference: 83,
    paid_time: 1616173613,
    invoice: 1616173613,
    amount: "972.02",
    status: false
  },
  {
    id: "50",
    createdAt: 1616173553,
    name: "Jalyn Pollich",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/emmeffess/128.jpg",
    reference: 66,
    paid_time: 1616173553,
    invoice: 1616173553,
    amount: "763.33",
    status: false
  },
  {
    id: "51",
    createdAt: 1616173493,
    name: "Abel Mueller",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mashaaaaal/128.jpg",
    reference: 27,
    paid_time: 1616173493,
    invoice: 1616173493,
    amount: "974.00",
    status: false
  },
  {
    id: "52",
    createdAt: 1616173433,
    name: "Ezra Becker",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olaolusoga/128.jpg",
    reference: 24,
    paid_time: 1616173433,
    invoice: 1616173433,
    amount: "553.07",
    status: false
  },
  {
    id: "53",
    createdAt: 1616173373,
    name: "Gerard Mante",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/BryanHorsey/128.jpg",
    reference: 69,
    paid_time: 1616173373,
    invoice: 1616173373,
    amount: "130.34",
    status: false
  },
  {
    id: "54",
    createdAt: 1616173313,
    name: "Eden Howell",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nutzumi/128.jpg",
    reference: 90,
    paid_time: 1616173313,
    invoice: 1616173313,
    amount: "527.62",
    status: false
  },
  {
    id: "55",
    createdAt: 1616173253,
    name: "Noel Quigley",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marakasina/128.jpg",
    reference: 59,
    paid_time: 1616173253,
    invoice: 1616173253,
    amount: "904.25",
    status: false
  },
  {
    id: "56",
    createdAt: 1616173193,
    name: "Selena Beahan IV",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/kevinjohndayy/128.jpg",
    reference: 75,
    paid_time: 1616173193,
    invoice: 1616173193,
    amount: "842.87",
    status: false
  },
  {
    id: "57",
    createdAt: 1616173133,
    name: "Leila Swift",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/timothycd/128.jpg",
    reference: 26,
    paid_time: 1616173133,
    invoice: 1616173133,
    amount: "645.56",
    status: false
  }
];
