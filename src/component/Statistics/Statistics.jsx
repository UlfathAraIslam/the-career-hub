import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const data = [
  { name: 'Assignment 1', value: 55 },
  { name: 'Assignment 2', value: 60 },
  { name: 'Assignment 3', value: 60 },
  { name: 'Assignment 4', value: 60 },
  { name: 'Assignment 5', value: 58 },
  { name: 'Assignment 6', value: 60 },
  { name: 'Assignment 7', value: 60 },
  { name: 'Assignment 8', value: 60 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF00FF', '#00FF00', '#0000FF', '#FF0000'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>Mark: {`${payload[0].value}/60`}</p>
      </div>
    );
  }
  return null;
};

const Statistics = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1 className="text-center">Assignment Results</h1>
          <PieChart width={600} height={400}>
            <Pie
              data={data}
              cx={300}
              cy={200}
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
          <ul className="list-unstyled text-center">
            {data.map((entry, index) => (
              <li key={`mark-${index}`}>
                <span className="text-capitalize">{entry.name}:</span> {entry.value}/60
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Link to="/" className="btn btn-primary mt-3">
              Go Back Home
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Statistics;
