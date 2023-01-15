import Card from '../../components/card/Card'
import './Home.css'

export default function Home(){
    return (
        <div className="wrapper">
          <Card
            img=""
            title="Drug Prediction"
            description="X-Ray description"
            buttonTitle="Predict"
            
          />
    
          <Card
            img=""
            title="X-Ray Status"
            description="Mental Health description"
            buttonTitle="Select"
            path = "/upload"
          />
        </div>
      );
}