import { Card, Button } from 'antd';

const CustomCard = () => {
  return (
    <Card
      hoverable
      style={{ width: 300, margin: '0 auto' }}
      cover={<img alt="example" src="/web.jpg" />}
    >
      <Card.Meta title="REACT GRAHQL DEVELOP" description="Best one bars to take friends and relatives, one bars to take friends and relatives." />
      
    </Card>
  );
};

export default CustomCard;
