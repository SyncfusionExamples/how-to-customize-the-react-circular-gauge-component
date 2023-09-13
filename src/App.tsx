import { AxesDirective, AxisDirective, CircularGaugeComponent, PointerDirective, PointersDirective, RangeDirective, RangesDirective } from '@syncfusion/ej2-react-circulargauge';
import './App.css';

function App() {
  return (
    <div className="App">
      <CircularGaugeComponent>
        <AxesDirective>
          <AxisDirective  background='rgba(0, 128, 128, 0.3)'
            lineStyle={{color:'blue',width:2}} 
            minimum={50} maximum={250}
            majorTicks={{
              color:'blue',
              width:3,
              height:10,
              interval:10,
              offset:5,
              position:'Outside'
            }}
            minorTicks={{
              color:'green',
              width:2,
              height:5,
              interval:5,
              offset:5,
              position:'Outside'
            }}
            labelStyle={{
              autoAngle:true,
              format:'{value}°C',
              hiddenLabel:'First'
            }}
            startAngle={0} endAngle={360} direction='AntiClockWise'
          >
            <PointersDirective>
              <PointerDirective>
              </PointerDirective>
            </PointersDirective>
            <RangesDirective>
              <RangeDirective start={210} end={250} startWidth={2} endWidth={20} color='blue' opacity={10}
              roundedCornerRadius={5}>
              </RangeDirective>
              <RangeDirective start={70} end={90} radius='70%'></RangeDirective>
              <RangeDirective start={110} end={150} radius='70%'></RangeDirective>
            </RangesDirective>
          </AxisDirective>
          <AxisDirective background='rgba(0, 256, 64, 0.3)'
          minimum={-20} maximum={60}>
          </AxisDirective>
        </AxesDirective>
      </CircularGaugeComponent>
    </div>
  );
}

export default App;