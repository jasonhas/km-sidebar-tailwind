import { BadgeDelta, Card, Flex, Grid, Col, Metric, ProgressBar, Text, DonutChart, Title, LineChart  } from "@tremor/react";

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
  
  const chartdata = [
    {
      year: 1970,
      "Export Growth Rate": 2.04,
      "Import Growth Rate": 1.53,
    },
    {
      year: 1971,
      "Export Growth Rate": 1.96,
      "Import Growth Rate": 1.58,
    },
    {
      year: 1972,
      "Export Growth Rate": 1.96,
      "Import Growth Rate": 1.61,
    },
    {
      year: 1973,
      "Export Growth Rate": 1.93,
      "Import Growth Rate": 1.61,
    },
    {
      year: 1974,
      "Export Growth Rate": 1.88,
      "Import Growth Rate": 1.67,
    },
  ];
  const valueFormatter = (number) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const Analytics = () => {

    return (
        <main className="p-12">
        <h2 className="text-2xl font-1emibold">Analytics</h2>
        <Text className="py-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
        <Grid numItems={4} numItemsSm={1} numItemsLg={2} className="gap-2">
            <Col numColSpan={4} numColSpanLg={2}>
                <Card className="max-w-lg mx-auto">
                    <Flex alignItems="start">
                        <div>
                        <Text>Sales</Text>
                        <Metric>$ 12,699</Metric>
                        </div>
                        <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
                    </Flex>
                    <Flex className="mt-4">
                        <Text className="truncate">68% ($ 149,940)</Text>
                        <Text>$ 220,500</Text>
                    </Flex>
                    <ProgressBar value={15.9} className="mt-2" />
                </Card>
                
            </Col>
            <Col>
            <Card>
    <Title>Export/Import Growth Rates (1970 to 2021)</Title>
    <LineChart
      className="mt-6"
      data={chartdata}
      index="year"
      categories={["Export Growth Rate", "Import Growth Rate"]}
      colors={["emerald", "gray"]}
      valueFormatter={valueFormatter}
      yAxisWidth={40}
    />
  </Card>
            </Col>
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


            <Col>
            <Card className="max-w-lg mx-auto">
            <Flex alignItems="start">
                <div>
                <Text>Sales</Text>
                <Metric>$ 12,699</Metric>
                </div>
                <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
            </Flex>
            <Flex className="mt-4">
                <Text className="truncate">68% ($ 149,940)</Text>
                <Text>$ 220,500</Text>
            </Flex>
            <ProgressBar value={15.9} className="mt-2" />
        </Card>
            </Col>


        </Grid>

      </main>
    )
}

export default Analytics