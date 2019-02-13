import './svgRoadmap.css';

import * as React from 'react';

import { Text } from '@vx/text';

const Roadmap = (props: any) => (
  /*
  <svg
    data-name="Layer 1"
    viewBox="0 0 483.898 571.685"
    style={{
      width: '100%',
      maxWidth: props.maxw,
      minWidth: props.minw,
      textTransform: 'uppercase',
      fontFamily: 'brandon_grotesque_regularRg',
      overflow: 'visible',
      height: '100%',
    }}
  >
    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={200}
      x="155.558"
      y="50.323"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.foundedGingrAG}
    </Text>

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={140}
      x="155.558"
      y="67.749"
      lineHeight="1.2em"
      style={{
        fontSize: '9.23015022277832px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.zurich + ' / ' + props.lang.switzerland}
    </Text>

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

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={140}
      x="155"
      y="139.379"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.gingrBetaVersion}
    </Text>

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

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={185}
      x="155.558"
      y="358.229"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.formatString(
        props.lang.gingr2Launch,
        'GINGR 2.0',
        props.lang.launch
      )}
    </Text>

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={150}
      x="155.515"
      y="376.655"
      lineHeight="1.2em"
      style={{
        fontSize: '9.23015022277832px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.pressReleaseWorldWide}
    </Text>

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={140}
      x="155.558"
      y="452.476"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {'GGC ICO ' + props.lang.publicPreSale}
    </Text>

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={140}
      x="155.558"
      y="536.936"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {'GGC ICO ' + props.lang.publicSale}
    </Text>

    <Text
      verticalAnchor="start"
      textAnchor="start"
      width={180}
      x="316.634"
      y="128.746"
      lineHeight="1.2em"
      className="roadmap-header"
    >
      {props.lang.establishUkranianITCompany}
    </Text>
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
        (GST) {props.lang.sale}
      </tspan>
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
      width={180}
      x="316.688"
      y="45.419"
      lineHeight="1.2em"
      className="roadmap-header"
    >
      {props.lang.ggcPaymentSystemIncorporated}
    </Text>

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={140}
      x="155.55"
      y="237.459"
      lineHeight="1.2em"
      className="roadmap-header"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.developing + ' GINGR 2.0'}
    </Text>

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
  */

  <svg
    data-name="Layer 1"
    viewBox="0 0 493.991 645.127"
    style={{
      width: '100%',
      maxWidth: props.maxw,
      minWidth: props.minw,
      textTransform: 'uppercase',
      fontFamily: 'brandon_grotesque_regularRg',
      overflow: 'visible',
      height: '100%',
    }}
  >
    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={200}
      x="164.605"
      y="128.522"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.foundedGingrAG}
    </Text>

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={140}
      x="164.605"
      y="146.940"
      lineHeight="1.2em"
      style={{
        fontSize: '9.23015022277832px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.zurich + ' / ' + props.lang.switzerland}
    </Text>

    <text
      style={{
        fontSize: '22px',
        fill: '#c333ff',
        fontFamily: 'brandon_grotesquebold, Brandon Grotesque',
      }}
      fontWeight="700"
      transform="translate(211.104 110.762) rotate(90)"
    >
      2016
    </text>
    <text
      style={{
        fontSize: '22px',
        fill: '#d3007e',
        fontFamily: 'brandon_grotesquebold, Brandon Grotesque',
      }}
      fontWeight="700"
      transform="translate(210.104 483.675) rotate(90)"
    >
      2018
    </text>
    <rect
      height="300.844"
      style={{ fill: '#23b770' }}
      width="3.425"
      x="295.26"
      y="344.283"
    />

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={200}
      x="164.605"
      y="227.90"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.gingrBetaVersion}
    </Text>

    <Text
      verticalAnchor="start"
      textAnchor="start"
      width={140}
      x="330.501"
      y="121.828"
      lineHeight="1.2em"
      style={{
        fontSize: '9.23015022277832px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.pressReleaseWorldWide}
    </Text>

    <text
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(330.501 115.428)"
    >
      {props.lang.formatString(
        props.lang.gingr2Launch,
        'GINGR 2.0',
        props.lang.launch
      )}
    </text>

    <text />

    <Text
      verticalAnchor="start"
      textAnchor="start"
      width={100}
      x="330.501"
      y="190.675"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {'GGC ICO ' + props.lang.publicPreSale}
    </Text>

    <text />

    <Text
      verticalAnchor="start"
      textAnchor="start"
      width={100}
      x="330.501"
      y="280.135"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {'GGC ICO ' + props.lang.publicSale}
    </Text>

    <text />

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={200}
      x="164.605"
      y="438.945"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.establishUkranianITCompany}
    </Text>

    <text />

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={200}
      x="164.605"
      y="509.598"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.gSpotOffice}
    </Text>

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={200}
      x="164.605"
      y="527.598"
      lineHeight="1.2em"
      style={{
        fontSize: '9.23015022277832px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.headquartersSwitzerland}
    </Text>

    <text />

    <text
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(329.672 411.035)"
    >
      GINGR POP N GO
      <tspan x="0" y="17.621">
        GINGR CONNECT
      </tspan>
      <tspan x="0" y="35.242">
        GINGR CARE
      </tspan>
    </text>
    <text />
    <text
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(329.619 507.156)"
    >
      GINGR BANK
    </text>
    <text />

    <Text
      verticalAnchor="start"
      textAnchor="start"
      width={145}
      x="330.501"
      y="564.899"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.formatString(
        props.lang.gingrShareTokenSale,
        'Gingr Share Token (GST)',
        props.lang.sale
      )}
    </Text>

    <text />

    <text
      style={{
        fontSize: '22px',
        fill: '#f3d551',
        fontFamily: 'brandon_grotesquebold, Brandon Grotesque',
      }}
      fontWeight="700"
      transform="translate(284.757 224.231) rotate(-90)"
    >
      2019
    </text>
    <text
      style={{
        fontSize: '22px',
        fill: '#23b770',
        fontFamily: 'brandon_grotesquebold, Brandon Grotesque',
      }}
      fontWeight="700"
      transform="translate(284.757 510.612) rotate(-90)"
    >
      2020
    </text>

    <rect
      height="269.482"
      style={{ fill: '#f3d551' }}
      width="3.288"
      x="295.329"
      y="73.199"
    />
    <text
      style={{
        fontSize: '23.67276954650879px',
        fill: '#f3d551',
        fontFamily: 'brandon_grotesquebold, Brandon Grotesque',
      }}
      fontWeight="700"
      transform="translate(188.226 20.122)"
    >
      ROAD MAP
    </text>

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={182}
      x="164.605"
      y="575.618"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.ggcPaymentSystemIncorporated}
    </Text>

    <text />

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={200}
      x="164.605"
      y="227.90"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.gingrBetaVersion}
    </Text>

    <Text
      verticalAnchor="start"
      textAnchor="end"
      width={200}
      x="164.605"
      y="300.658"
      lineHeight="1.2em"
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
    >
      {props.lang.developing}
    </Text>

    <text
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(70.642 311.658)"
    >
      <tspan x="24.852" y="18.125">
        GINGR 2.0
      </tspan>
    </text>
    <text
      style={{
        fontSize: '22px',
        fill: '#7caace',
        fontFamily: 'brandon_grotesquebold, Brandon Grotesque',
      }}
      fontWeight="700"
      transform="translate(210.957 258.359) rotate(90)"
    >
      2017
    </text>
    <rect
      height="122.26"
      style={{ fill: '#c333ff' }}
      width="3.425"
      x="198.14"
      y="73.199"
    />
    <rect
      height="177.674"
      style={{ fill: '#7caace' }}
      width="3.426"
      x="198.138"
      y="196.127"
    />
    <rect
      height="269.481"
      style={{ fill: '#d3007e' }}
      width="3.288"
      x="198.208"
      y="375.193"
    />
    <text
      style={{
        fontSize: '11px',
        fill: '#f3d551',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(328.457 181.175)"
    >
      <tspan xmlSpace="preserve">1. OCTOBER</tspan>
    </text>
    <text />
    <text
      style={{
        fontSize: '11px',
        fill: '#f3d551',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(331.255 270.175)"
    >
      1. NOVEMBER
    </text>
    <text />
  </svg>
);

export default Roadmap;
