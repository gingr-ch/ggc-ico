import * as React from 'react';
import { Text } from '@vx/text';
// import LocalizedStrings from 'react-localization';
// import { RoadmapStrings } from '../../components/l18n';
//
// export const langEn = require('../../assets/l18n/roadmap.en.json');
// export const strings: RoadmapStrings = new LocalizedStrings({
//   en: langEn,
// });
import './svgRoadmap.css';

const Roadmap = (props: any) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 483.898 571.685"
    style={{
      width: '100%',
      maxWidth: '645px',
      minWidth: '645px',
      textTransform: 'uppercase',
      fontFamily: 'brandon_grotesque_regularRg',
    }}
  >
    <text
      transform="translate(5.089 52.323)"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.foundedGingrAG}
      <tspan style={{ fontSize: '9.23015022277832px' }}>
        <tspan x="47.084" y="13.426">
          {props.lang.zurich} / {props.lang.switzerland}
        </tspan>
      </tspan>
    </text>
    <text
      transform="translate(109.214 31.929)"
      style={{
        fontSize: '10.367409706115723px',
        fill: '#f3d551',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.january}
    </text>
    <text
      transform="translate(201.011 64.23) rotate(90)"
      style={{
        fontSize: 22,
        fill: '#f3d551',
        fontFamily: 'brandon_grotesquebold, Brandon Grotesque',
        fontWeight: 700,
      }}
    >
      2016
    </text>
    <text
      transform="translate(200.011 411.476) rotate(90)"
      style={{
        fontSize: 22,
        fill: '#d3007e',
        fontFamily: 'brandon_grotesquebold, Brandon Grotesque',
        fontWeight: 700,
      }}
    >
      2018
    </text>
    <rect
      x="285.168"
      y="271.083"
      width="3.425"
      height="170.308"
      style={{ fill: '#c333ff' }}
    />
    <text
      transform="translate(0 139.379)"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.gingrBetaVersion}
      <tspan
        x="92.781"
        y="18.125"
        style={{ letterSpacing: '0.031002743729686744em' }}
      >
        {props.lang.launch}
      </tspan>
    </text>
    <text
      transform="translate(99.904 118.984)"
      style={{
        fontSize: '10.367409706115723px',
        fill: '#f3d551',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.december}
    </text>
    <text
      transform="translate(17.558 363.229)"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      GINGR 2.0 {props.lang.launch}
      <tspan style={{ fontSize: '9.23015022277832px' }}>
        <tspan x="7.957" y="13.426">
          {props.lang.pressReleaseWorldWide}
        </tspan>
      </tspan>
    </text>
    <text
      transform="translate(127.338 342.834)"
      style={{
        fontSize: '10.367409706115723px',
        fill: '#d3007e',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.april}
    </text>
    <text
      transform="translate(23.448 452.476)"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      GGC ICO {props.lang.preSale}
    </text>
    <text
      transform="translate(134.212 432.082)"
      style={{
        fontSize: '10.367409706115723px',
        fill: '#d3007e',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.may}
    </text>
    <text
      transform="translate(12.03 536.936)"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      GGC ICO {props.lang.mainSale}
    </text>
    <text
      transform="translate(129.64 516.542)"
      style={{
        fontSize: '10.367409706115723px',
        fill: '#d3007e',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.june}
    </text>

    <Text
      verticalAnchor="start"
      textAnchor="start"
      width="180"
      x="316.634"
      y="128.746"
      lineHeight="1.2em"
      className="roadmap-header"
    >
      {props.lang.establishUkranianITCompany}
    </Text>
    <text
      transform="translate(316.742 118.351)"
      style={{
        fontSize: '10.367409706115723px',
        fill: '#d3007e',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.september}
    </text>
    <text
      transform="translate(316.634 225.398)"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.gSpotOffice}
      <tspan style={{ fontSize: '9.23015022277832px' }}>
        <tspan x={0} y="12.587">
          {props.lang.headquartersSwitzerland}
        </tspan>
      </tspan>
    </text>
    <text
      transform="translate(316.742 205.004)"
      style={{
        fontSize: '10.367409706115723px',
        fill: '#d3007e',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.november}
    </text>
    <text
      transform="translate(319.58 314.836)"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.gingrPopNGo}
      <tspan x={0} y="17.621">
        {props.lang.gingrConnect}
      </tspan>
      <tspan x={0} y="35.242">
        {props.lang.gingrCare}
      </tspan>
    </text>
    <text
      transform="translate(319.688 295.441)"
      style={{
        fontSize: '10.367409706115723px',
        fill: '#c333ff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.february}
    </text>
    <text
      transform="translate(319.526 417.623)"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.gingrBank}
    </text>
    <text
      transform="translate(319.634 397.229)"
      style={{
        fontSize: '10.367409706115723px',
        fill: '#c333ff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.may}
    </text>
    <text
      transform="translate(319.526 510.366)"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.gingrCryptoShare}
      <tspan
        x={0}
        y="17.621"
        style={{ letterSpacing: '-0.013998110568252722em' }}
      >
        (GCS) {props.lang.sale}
      </tspan>
    </text>
    <text
      transform="translate(319.634 489.972)"
      style={{
        fontSize: '10.367409706115723px',
        fill: '#23b770',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.october}
    </text>
    <rect
      x="285.167"
      y="443.399"
      width="3.426"
      height="128.286"
      style={{ fill: '#23b770' }}
    />
    <text
      transform="translate(274.664 377.032) rotate(-90)"
      style={{
        fontSize: 22,
        fill: '#c333ff',
        fontFamily: 'brandon_grotesquebold, Brandon Grotesque',
        fontWeight: 700,
      }}
    >
      2019
    </text>
    <text
      transform="translate(274.664 530.079) rotate(-90)"
      style={{
        fontSize: 22,
        fill: '#23b770',
        fontFamily: 'brandon_grotesquebold, Brandon Grotesque',
        fontWeight: 700,
      }}
    >
      2020
    </text>
    <rect
      x="285.236"
      width="3.288"
      height="269.482"
      style={{ fill: '#d3007e' }}
    />
    <Text
      verticalAnchor="start"
      textAnchor="start"
      width="180"
      x="316.688"
      y="45.419"
      lineHeight="1.2em"
      className="roadmap-header"
    >
      {props.lang.ggcPaymentSystemIncorporated}
    </Text>
    <text
      transform="translate(316.796 32.024)"
      style={{
        fontSize: '10.367409706115723px',
        fill: '#d3007e',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.july}
    </text>
    <text
      transform="translate(60.55 237.459)"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.developing}
      <tspan x="22.852" y="18.125">
        GINGR 2.0
      </tspan>
    </text>
    <text
      transform="translate(200.864 218.16) rotate(90)"
      style={{
        fontSize: 22,
        fill: '#7caace',
        fontFamily: 'brandon_grotesquebold, Brandon Grotesque',
        fontWeight: 700,
      }}
    >
      2017
    </text>
    <rect
      x="188.047"
      width="3.425"
      height="189.911"
      style={{ fill: '#f3d551' }}
    />
    <rect
      x="188.046"
      y="190.427"
      width="3.426"
      height="110.174"
      style={{ fill: '#7caace' }}
    />
    <rect
      x="188.115"
      y="301.994"
      width="3.288"
      height="269.481"
      style={{ fill: '#d3007e' }}
    />
  </svg>
);

export default Roadmap;
