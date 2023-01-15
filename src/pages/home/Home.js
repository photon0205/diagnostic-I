import Card from "../../components/card/Card";
import "./Home.css";

export default function Home() {
  return (
    <div className="wrapper1">
      <Card
        title="Laboratory Results"
        description="Tell us about your symptoms 
                    you are facing and we will give
                    you the predicted medicines 
                    you can take"
        buttonTitle="Predict"
        path="/lab"
      />

      <Card
        title="X-Ray Status"
        description="Upload your X-Ray and find out 
                    if you a particular disease or 
                    you are healthy"
        buttonTitle="Select"
        path="/upload"
      />

      <Card
        title="Mental Health"
        description="Mental Health description"
        buttonTitle="Predict"
        path="/mental"
      />
    </div>
  );
}
