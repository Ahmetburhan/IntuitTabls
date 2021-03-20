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
    createdAt: 1616180760,
    name: "Michale Haley",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/uxalex/128.jpg",
    reference: 29,
    paid_time: 1616180760,
    invoice: 1616180760,
    amount: "842.56",
    status: false
  },
  {
    id: "2",
    createdAt: 1616180700,
    name: "Dewitt Bauch",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/joshaustin/128.jpg",
    reference: 23,
    paid_time: 1616180700,
    invoice: 1616180700,
    amount: "654.52",
    status: false
  },
  {
    id: "3",
    createdAt: 1616180640,
    name: "Adrain Volkman",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/hai_ninh_nguyen/128.jpg",
    reference: 49,
    paid_time: 1616180640,
    invoice: 1616180640,
    amount: "304.86",
    status: false
  },
  {
    id: "4",
    createdAt: 1616180580,
    name: "Maria Strosin III",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/angelcolberg/128.jpg",
    reference: 50,
    paid_time: 1616180580,
    invoice: 1616180580,
    amount: "537.99",
    status: false
  },
  {
    id: "5",
    createdAt: 1616180520,
    name: "Jamison Cartwright",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/haligaliharun/128.jpg",
    reference: 78,
    paid_time: 1616180520,
    invoice: 1616180520,
    amount: "108.96",
    status: false
  },
  {
    id: "6",
    createdAt: 1616180460,
    name: "Issac Macejkovic",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/uberschizo/128.jpg",
    reference: 73,
    paid_time: 1616180460,
    invoice: 1616180460,
    amount: "730.04",
    status: false
  },
  {
    id: "7",
    createdAt: 1616180400,
    name: "Berta Borer",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/jimmuirhead/128.jpg",
    reference: 75,
    paid_time: 1616180400,
    invoice: 1616180400,
    amount: "758.86",
    status: false
  },
  {
    id: "8",
    createdAt: 1616180340,
    name: "Lisandro Kling",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/carbontwelve/128.jpg",
    reference: 28,
    paid_time: 1616180340,
    invoice: 1616180340,
    amount: "606.29",
    status: false
  },
  {
    id: "9",
    createdAt: 1616180280,
    name: "Alex Robel III",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/michaelbrooksjr/128.jpg",
    reference: 10,
    paid_time: 1616180280,
    invoice: 1616180280,
    amount: "774.50",
    status: false
  },
  {
    id: "10",
    createdAt: 1616180220,
    name: "Elmore Rau DVM",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/aaronalfred/128.jpg",
    reference: 18,
    paid_time: 1616180220,
    invoice: 1616180220,
    amount: "645.26",
    status: false
  },
  {
    id: "11",
    createdAt: 1616180160,
    name: "Krystal Von",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dannol/128.jpg",
    reference: 37,
    paid_time: 1616180160,
    invoice: 1616180160,
    amount: "910.15",
    status: false
  },
  {
    id: "12",
    createdAt: 1616180100,
    name: "Mrs. Angela Hansen",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/badlittleduck/128.jpg",
    reference: 1,
    paid_time: 1616180100,
    invoice: 1616180100,
    amount: "746.50",
    status: false
  },
  {
    id: "13",
    createdAt: 1616180040,
    name: "Antonia Collins",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/shinze/128.jpg",
    reference: 20,
    paid_time: 1616180040,
    invoice: 1616180040,
    amount: "258.72",
    status: false
  },
  {
    id: "14",
    createdAt: 1616179980,
    name: "Samara Bernhard",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg",
    reference: 77,
    paid_time: 1616179980,
    invoice: 1616179980,
    amount: "993.91",
    status: false
  },
  {
    id: "15",
    createdAt: 1616179920,
    name: "Jaleel Schaden V",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/mbilderbach/128.jpg",
    reference: 48,
    paid_time: 1616179920,
    invoice: 1616179920,
    amount: "987.47",
    status: false
  },
  {
    id: "16",
    createdAt: 1616179860,
    name: "Erwin Dicki",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/uberschizo/128.jpg",
    reference: 20,
    paid_time: 1616179860,
    invoice: 1616179860,
    amount: "973.70",
    status: false
  },
  {
    id: "17",
    createdAt: 1616179800,
    name: "Braxton Kilback",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/yehudab/128.jpg",
    reference: 77,
    paid_time: 1616179800,
    invoice: 1616179800,
    amount: "1.36",
    status: false
  },
  {
    id: "18",
    createdAt: 1616179740,
    name: "Constantin Schmidt",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/mikemai2awesome/128.jpg",
    reference: 11,
    paid_time: 1616179740,
    invoice: 1616179740,
    amount: "72.06",
    status: false
  },
  {
    id: "19",
    createdAt: 1616179680,
    name: "Adeline Walker",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nessoila/128.jpg",
    reference: 40,
    paid_time: 1616179680,
    invoice: 1616179680,
    amount: "171.54",
    status: false
  },
  {
    id: "20",
    createdAt: 1616179620,
    name: "Elnora Ruecker",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/allfordesign/128.jpg",
    reference: 91,
    paid_time: 1616179620,
    invoice: 1616179620,
    amount: "384.12",
    status: false
  },
  {
    id: "21",
    createdAt: 1616179560,
    name: "Jayce Homenick",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/sebashton/128.jpg",
    reference: 57,
    paid_time: 1616179560,
    invoice: 1616179560,
    amount: "771.13",
    status: false
  },
  {
    id: "22",
    createdAt: 1616179500,
    name: "Ms. Perry Rutherford",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/theonlyzeke/128.jpg",
    reference: 41,
    paid_time: 1616179500,
    invoice: 1616179500,
    amount: "999.81",
    status: false
  },
  {
    id: "23",
    createdAt: 1616179440,
    name: "Kamren Ankunding",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/arashmanteghi/128.jpg",
    reference: 33,
    paid_time: 1616179440,
    invoice: 1616179440,
    amount: "934.56",
    status: false
  },
  {
    id: "24",
    createdAt: 1616179380,
    name: "Kyla D'Amore",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/isacosta/128.jpg",
    reference: 96,
    paid_time: 1616179380,
    invoice: 1616179380,
    amount: "726.76",
    status: false
  },
  {
    id: "25",
    createdAt: 1616179320,
    name: "Eugene Crona DDS",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/mirfanqureshi/128.jpg",
    reference: 30,
    paid_time: 1616179320,
    invoice: 1616179320,
    amount: "111.46",
    status: false
  },
  {
    id: "26",
    createdAt: 1616179260,
    name: "Drake Boyle",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg",
    reference: 24,
    paid_time: 1616179260,
    invoice: 1616179260,
    amount: "544.09",
    status: false
  },
  {
    id: "27",
    createdAt: 1616179200,
    name: "Malvina Hammes",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/abdullindenis/128.jpg",
    reference: 57,
    paid_time: 1616179200,
    invoice: 1616179200,
    amount: "198.30",
    status: false
  },
  {
    id: "28",
    createdAt: 1616179140,
    name: "Vella Frami",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rpatey/128.jpg",
    reference: 89,
    paid_time: 1616179140,
    invoice: 1616179140,
    amount: "867.85",
    status: false
  },
  {
    id: "29",
    createdAt: 1616179080,
    name: "Leda Durgan",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/franciscoamk/128.jpg",
    reference: 61,
    paid_time: 1616179080,
    invoice: 1616179080,
    amount: "297.50",
    status: false
  },
  {
    id: "30",
    createdAt: 1616179020,
    name: "Mr. Howard Schimmel",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/terpimost/128.jpg",
    reference: 0,
    paid_time: 1616179020,
    invoice: 1616179020,
    amount: "420.56",
    status: false
  },
  {
    id: "31",
    createdAt: 1616178960,
    name: "Lina Stark",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/areus/128.jpg",
    reference: 3,
    paid_time: 1616178960,
    invoice: 1616178960,
    amount: "931.36",
    status: false
  },
  {
    id: "32",
    createdAt: 1616178900,
    name: "Aida Barton",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rawdiggie/128.jpg",
    reference: 52,
    paid_time: 1616178900,
    invoice: 1616178900,
    amount: "24.31",
    status: false
  },
  {
    id: "33",
    createdAt: 1616178840,
    name: "Naomi Sipes",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bergmartin/128.jpg",
    reference: 9,
    paid_time: 1616178840,
    invoice: 1616178840,
    amount: "393.80",
    status: false
  },
  {
    id: "34",
    createdAt: 1616178780,
    name: "Cydney Blanda III",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/dallasbpeters/128.jpg",
    reference: 87,
    paid_time: 1616178780,
    invoice: 1616178780,
    amount: "543.38",
    status: false
  },
  {
    id: "35",
    createdAt: 1616178720,
    name: "Adele Brown",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stefooo/128.jpg",
    reference: 19,
    paid_time: 1616178720,
    invoice: 1616178720,
    amount: "495.10",
    status: false
  },
  {
    id: "36",
    createdAt: 1616178660,
    name: "Nathanial Beier",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jennyshen/128.jpg",
    reference: 9,
    paid_time: 1616178660,
    invoice: 1616178660,
    amount: "174.12",
    status: false
  },
  {
    id: "37",
    createdAt: 1616178600,
    name: "Letitia Von",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
    reference: 59,
    paid_time: 1616178600,
    invoice: 1616178600,
    amount: "486.37",
    status: false
  },
  {
    id: "38",
    createdAt: 1616178540,
    name: "Verdie Koepp",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/daykiine/128.jpg",
    reference: 70,
    paid_time: 1616178540,
    invoice: 1616178540,
    amount: "802.14",
    status: false
  },
  {
    id: "39",
    createdAt: 1616178480,
    name: "Hadley Gusikowski V",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/allthingssmitty/128.jpg",
    reference: 47,
    paid_time: 1616178480,
    invoice: 1616178480,
    amount: "4.25",
    status: false
  },
  {
    id: "40",
    createdAt: 1616178420,
    name: "Sean Predovic",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/horaciobella/128.jpg",
    reference: 55,
    paid_time: 1616178420,
    invoice: 1616178420,
    amount: "786.14",
    status: false
  },
  {
    id: "41",
    createdAt: 1616178360,
    name: "Joey Rohan",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stalewine/128.jpg",
    reference: 51,
    paid_time: 1616178360,
    invoice: 1616178360,
    amount: "676.13",
    status: false
  },
  {
    id: "42",
    createdAt: 1616178300,
    name: "Sean Predovic",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg",
    reference: 8,
    paid_time: 1616178300,
    invoice: 1616178300,
    amount: "805.47",
    status: false
  },
  {
    id: "43",
    createdAt: 1616178240,
    name: "Ralph Treutel V",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/mikemai2awesome/128.jpg",
    reference: 87,
    paid_time: 1616178240,
    invoice: 1616178240,
    amount: "472.63",
    status: false
  },
  {
    id: "44",
    createdAt: 1616178180,
    name: "Randal Krajcik",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/okcoker/128.jpg",
    reference: 23,
    paid_time: 1616178180,
    invoice: 1616178180,
    amount: "770.48",
    status: false
  },
  {
    id: "45",
    createdAt: 1616178120,
    name: "Michel Rodriguez",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nelshd/128.jpg",
    reference: 57,
    paid_time: 1616178120,
    invoice: 1616178120,
    amount: "155.56",
    status: false
  },
  {
    id: "46",
    createdAt: 1616178060,
    name: "Melody Hermann Sr.",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/nastya_mane/128.jpg",
    reference: 42,
    paid_time: 1616178060,
    invoice: 1616178060,
    amount: "299.90",
    status: false
  },
  {
    id: "47",
    createdAt: 1616178000,
    name: "Dr. Yesenia Casper",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dansowter/128.jpg",
    reference: 79,
    paid_time: 1616178000,
    invoice: 1616178000,
    amount: "982.92",
    status: false
  },
  {
    id: "48",
    createdAt: 1616177940,
    name: "Antonetta Bednar PhD",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/kanickairaj/128.jpg",
    reference: 29,
    paid_time: 1616177940,
    invoice: 1616177940,
    amount: "395.28",
    status: false
  },
  {
    id: "49",
    createdAt: 1616177880,
    name: "Abdiel Nienow",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/terryxlife/128.jpg",
    reference: 50,
    paid_time: 1616177880,
    invoice: 1616177880,
    amount: "830.53",
    status: false
  },
  {
    id: "50",
    createdAt: 1616177820,
    name: "Clotilde Cummings",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rdbannon/128.jpg",
    reference: 37,
    paid_time: 1616177820,
    invoice: 1616177820,
    amount: "145.39",
    status: false
  },
  {
    id: "51",
    createdAt: 1616177760,
    name: "Otto King",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/maz/128.jpg",
    reference: 16,
    paid_time: 1616177760,
    invoice: 1616177760,
    amount: "110.91",
    status: false
  },
  {
    id: "52",
    createdAt: 1616177700,
    name: "Deon Langosh",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bcrad/128.jpg",
    reference: 33,
    paid_time: 1616177700,
    invoice: 1616177700,
    amount: "178.20",
    status: false
  },
  {
    id: "53",
    createdAt: 1616177640,
    name: "Zakary Mosciski",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/elliotnolten/128.jpg",
    reference: 21,
    paid_time: 1616177640,
    invoice: 1616177640,
    amount: "330.66",
    status: false
  },
  {
    id: "54",
    createdAt: 1616177580,
    name: "Eleazar Lind",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kojourin/128.jpg",
    reference: 28,
    paid_time: 1616177580,
    invoice: 1616177580,
    amount: "382.90",
    status: false
  },
  {
    id: "55",
    createdAt: 1616177520,
    name: "Remington Baumbach",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/janpalounek/128.jpg",
    reference: 75,
    paid_time: 1616177520,
    invoice: 1616177520,
    amount: "190.64",
    status: false
  },
  {
    id: "56",
    createdAt: 1616177460,
    name: "Riley Koelpin",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/timothycd/128.jpg",
    reference: 23,
    paid_time: 1616177460,
    invoice: 1616177460,
    amount: "514.67",
    status: false
  },
  {
    id: "57",
    createdAt: 1616177400,
    name: "Katrina Schamberger III",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/to_soham/128.jpg",
    reference: 48,
    paid_time: 1616177400,
    invoice: 1616177400,
    amount: "774.10",
    status: false
  }
];
