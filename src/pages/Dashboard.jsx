import { Card, Title, Text, Metric, Flex, ProgressBar, DonutChart, Grid, Col } from '@tremor/react'

const cities = [
    {
      name: "New York",
      sales: 9800,
    },
    {
      name: "London",
      sales: 4567,
    },
    {
      name: "Hong Kong",
      sales: 3908,
    },
    {
      name: "San Francisco",
      sales: 2400,
    },
    {
      name: "Singapore",
      sales: 1908,
    },
    {
      name: "Zurich",
      sales: 1398,
    },
  ];

  const valueFormatter = (number) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const Dashboard = () => {

    return (
        <div>
                    <Card className="max-w-lg">
          <Title>Sales</Title>
          <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
        </Card>
        </div>
//         <div className='p-7 max-w-[1240px] relative'>
//             <h2 className='text-2xl font-semibold'>Dashboard</h2>
//             <div className=''>
//             <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
//             <Col numColSpan={1} numColSpanLg={2}>
//                 <Card>
//                 <Text>Title</Text>
//                 <Metric>KPI 1</Metric>
//                 </Card>
//             </Col>
//             <Card className="max-w-lg">
//           <Title>Sales</Title>
//           <DonutChart
//             className="mt-6"
//             data={cities}
//             category="sales"
//             index="name"
//             valueFormatter={valueFormatter}
//             colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
//           />
//         </Card>
//             <Col>
//     <Card>
//       <Text>Title</Text>
//       <Metric>KPI 3</Metric>
//     </Card>
//   </Col>
//   <Card>
//     <Text>Title</Text>
//     <Metric>KPI 4</Metric>
//   </Card>
//   <Card>
//     <Text>Title</Text>
//     <Metric>KPI 5</Metric>
//   </Card>
//             </Grid>
//             </div>

//         </div>

    )
}

export default Dashboard