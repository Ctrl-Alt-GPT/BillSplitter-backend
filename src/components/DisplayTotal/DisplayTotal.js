import '../../styles/DisplayTotal.css';
import Card from '../UI/Card';
import GrandTotal from './GrandTotal';
import Subtotal from './Subtotal';

const DisplayTotal = (props) => {
  const extractedItemAmounts = props.datas.map((data) => data.amount);
  const receivedTaxTips = props.taxTipsData;
  
  return (
    <Card className="display-total">
      <Subtotal itemAmounts={extractedItemAmounts} />
      <p className="display-items">Total tax: {props.taxData}</p>
      <p className="display-items">Total tips: {props.tipsData}</p>
      <GrandTotal
        itemAmounts={extractedItemAmounts}
        totalTax={props.taxData}
        totalTips={props.tipsData}
      />
    </Card>
  );
};

export default DisplayTotal;
