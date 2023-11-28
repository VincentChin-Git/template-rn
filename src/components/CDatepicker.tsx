import dayjs, { Dayjs } from 'dayjs';
import DatePicker from 'react-native-modern-datepicker';

import CPopup from './CPopup';

const CDatePicker = ({
  show,
  handleClose,
  handleSelectDate,
  minDate = dayjs().subtract(1, 'year').startOf('year'),
  maxDate = dayjs().endOf('year'),
}: {
  show: boolean;
  handleClose: () => void;
  handleSelectDate: (date: any) => void;
  minDate?: Dayjs;
  maxDate?: Dayjs;
}) => {
  return (
    <CPopup position="middle" show={show} handleClose={handleClose}>
      <DatePicker
        onSelectedChange={(date: any) => handleSelectDate(date)}
        style={{ width: '80%', borderRadius: 10 }}
        mode="calendar"
        minimumDate={minDate.format('YYYY-MM-DD')}
        maximumDate={maxDate.format('YYYY-MM-DD')}
      />
    </CPopup>
  );
};

export default CDatePicker;
