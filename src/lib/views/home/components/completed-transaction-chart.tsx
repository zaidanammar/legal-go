import { Gauge } from '@ant-design/plots';
import { Flex, Typography } from 'antd';

export const CompletedTransactionChart = () => {
  const data = {
    target: 120,
    total: 400,
  };

  const percentage = data.total > 0 ? data.target / data.total : 0;

  return (
    <div
      style={{
        background: '#FFFF',
        padding: 24,
        borderRadius: 5,
        border: '2px solid #ECEEF6',
      }}
    >
      <Flex style={{ marginBottom: 16 }}>
        <Typography.Title level={4}>Transaksi Selesai</Typography.Title>
      </Flex>

      {data ? (
        <Gauge
          autoFit
          height={200}
          percent={percentage}
          range={{
            color: ['#2E2F7C', '#EEF0F2'],
            width: 20,
          }}
          animation
          axis={{
            label: {
              formatter: (v) => `${(v as unknown as number) * 100}%`,
            },
            subTickLine: {
              count: 0,
            },
            tickLine: {
              style: {
                stroke: '#FFFFFF',
              },
            },
          }}
          statistic={{
            content: {
              formatter: () => `${(percentage * 100).toFixed(0)}%`,
              style: {
                fontWeight: 600,
              },
            },
          }}
          indicator={{
            pointer: {
              style: {
                stroke: '#383E49',
                lineWidth: 5,
                lineCap: 'round',
              },
            },
            pin: {
              style: {
                stroke: '#383E49',
                lineWidth: 3,
                lineCap: 'round',
              },
            },
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
