import { Pie } from '@ant-design/plots';
import { Flex, Typography } from 'antd';

import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';

export const Top5CaseChart = () => {
  const { isMobile } = useBreakpointValue();
  const sourceOfDonutChart = [
    {
      type: 'Pidana',
      value: 104,
    },
    {
      type: 'Perdata',
      value: 78,
    },
    {
      type: 'Perceraian',
      value: 26,
    },
    {
      type: 'Surat Tanah',
      value: 22,
    },
    {
      type: 'Surat Bisnis',
      value: 18,
    },
  ];

  return (
    <div
      style={{
        background: '#FFFF',
        padding: 24,
        borderRadius: 5,
        border: '2px solid #ECEEF6',
      }}
    >
      <Flex justify="center" style={{ marginBottom: 16 }}>
        <Typography.Title level={4}>Top 5 Kasus</Typography.Title>
      </Flex>

      {sourceOfDonutChart?.length > 0 ? (
        <Pie
          height={185}
          data={sourceOfDonutChart}
          color={['#00C3CC', '#FFBA07', '#F96D19', '#04D182', '#4C5CA0']}
          tooltip={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter: (datum: any) => {
              return {
                name: datum.type,
                value: Intl.NumberFormat('id-ID').format(
                  datum.value.toFixed(0)
                ),
              };
            },
            itemTpl:
              '<li style="font-size:12px; padding-bottom: 12px; border-radius: 5px;"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
          }}
          legend={{
            position: isMobile ? 'bottom' : 'right',
            itemName: {
              style: {
                fontSize: isMobile ? 12 : 14,
              },
            },
          }}
          angleField="value"
          colorField="type"
          label={{
            type: 'inner',
            position: 'middle',
            content: '{value}%',
            style: {
              fontSize: 10,
              fontWeight: 500,
              fill: '#fff',
            },
          }}
          pieStyle={{
            stroke: '#fff',
            lineWidth: 2.5,
          }}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography.Title level={2}>Data Tidak Tersedia</Typography.Title>
        </div>
      )}
    </div>
  );
};
