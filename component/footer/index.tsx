import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { EmptyRowCol, HrefTargetBlank } from '../common';
import { IFooter } from './IFooter';
import { Style } from '../common/Style';

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div style={Style.footer} className="text-center mt-4">
          <EmptyRowCol>
            <>
              {payload.aa}
              {/* Github 주소는 origin repository 의 주소를 넣는다. */}
              <HrefTargetBlank url="https://github.com/jongkwon5/resume" text="" />
            </>
          </EmptyRowCol>
        </div>
      </Col>
    </Row>
  );
}
