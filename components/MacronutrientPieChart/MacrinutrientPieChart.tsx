import { Pie } from 'react-chartjs-2';
import styled from "styled-components";

const PieChart = styled(Pie)`
    margin: 0 auto;
    max-height: 380px;
    max-width: 380px;
`;

const MacronutrientPieChart = ({ protein, carbs, fat }) => {
    const data = {
        labels: [
            'Protein',
            'Carbs',
            'Fat',
        ],
        datasets: [{
            data: [protein, carbs, fat],
            backgroundColor: [
                '#80F',
                'coral',
                'orange',
            ],
            hoverBackgroundColor: [
                '#80F',
                'coral',
                'orange',
            ],
        }],
    };

    return (
        // @ts-ignore
        <PieChart
            data={data}
        />
    );
};

export default MacronutrientPieChart;