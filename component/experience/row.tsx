import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IExperience } from './IExperience';
import { Style } from '../common/Style';
import Util from '../common/Util';

export default function ExperienceRow({
  item,
  index,
}: PropsWithChildren<{ item: IExperience.Item; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          {createWorkingPeriod(item.startedAt, item.endedAt)}
        </Col>
        <Col sm={12} md={9}>
          <h4>{item.title}</h4>
          <i style={Style.gray}>{item.position}</i>
        </Col>
      </Row>
    </div>
  );
}

function createWorkingPeriod(startedAtString: string, endedAtString?: string) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(startedAtString, DATE_FORMAT.YYYY_LL_DD);

  const { periodTitle, isWorking } = (() => {
    if (!endedAtString) {
      return {
        periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL_DOT_DD)} ~`,
        isWorking: true,
      };
    }

    const _endedAt = DateTime.fromFormat(endedAtString, DATE_FORMAT.YYYY_LL_DD);
    return {
      periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL_DOT_DD)} ~ ${_endedAt.toFormat(
        DATE_FORMAT.YYYY_DOT_LL_DOT_DD,
      )}`,
      isWorking: false,
    };
  })();

  return (
    <Row>
      <Col md={12} xs={isWorking ? 7 : 9}>
        <h4 style={Style.gray}>{periodTitle}</h4>
      </Col>
    </Row>
  );
}

/* <Col md={12} xs={isWorking ? 5 : 3} className="text-md-right text-center">
{isWorking ? (
  <Badge color="primary" className="mr-1">
    재직 중
  </Badge>
) : (
  ''
)}
<Badge color="info">{Util.getFormattingDuration(startedAt)}</Badge>
</Col>/ 뱃지 */
