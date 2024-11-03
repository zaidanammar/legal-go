import { Pie } from '@ant-design/plots';
import { Flex, Typography } from 'antd';

import { useBreakpointValue } from '@/lib/hooks/use-breakpoint-value';
import { useViewModelContext } from '@/lib/providers/view-model';
import { type DashboardPageViewModel } from '@/lib/views/dashboard/hooks';

export const Top5CaseChart = () => {
  const { isMobile } = useBreakpointValue();
  const { dashboardData } = useViewModelContext<DashboardPageViewModel>();

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

      {dashboardData && dashboardData?.top_5_cases.length > 0 ? (
        <Pie
          height={185}
          data={dashboardData.top_5_cases}
          color={['#00C3CC', '#FFBA07', '#F96D19', '#04D182', '#4C5CA0']}
          tooltip={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter: (datum: any) => {
              return {
                name: datum.category,
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
          colorField="category"
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
