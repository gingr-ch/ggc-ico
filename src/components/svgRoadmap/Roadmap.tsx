import * as React from 'react';
import { Text } from '@vx/text';

import './svgRoadmap.css';

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
    <text
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(10.093 237.578)"
    >
      GINGR BE
      <tspan
        style={{ letterSpacing: '-0.037985634913849764em' }}
        x="69.673"
        y="0"
      >
        T
      </tspan>
      <tspan x="76.5" y="0">
        A VERSION
      </tspan>
      <tspan
        style={{ letterSpacing: '0.031002743729686744em' }}
        x="92.781"
        y="18.125"
      >
        L
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.008001229481853462em' }}
        x="100.786"
        y="18.125"
      >
        A
      </tspan>
      <tspan x="110.664" y="18.125">
        UNCH
      </tspan>
    </text>
    <text
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(330.501 115.428)"
    >
      GINGR 2
      <tspan
        style={{ letterSpacing: '-0.016002458963706924em' }}
        x="59.206"
        y="0"
      >
        .
      </tspan>
      <tspan
        style={{ letterSpacing: '0.00003232819992668065em' }}
        x="62.423"
        y="0"
      >
        0
      </tspan>
      <tspan
        style={{ letterSpacing: '0.030970415529760067em' }}
        x="75.276"
        y="0"
      >
        L
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.007985065381890121em' }}
        x="83.281"
        y="0"
      >
        A
      </tspan>
      <tspan x="93.159" y="0">
        UNCH
      </tspan>
      <tspan style={{ fontSize: '9.23015022277832px' }}>
        <tspan x="0" y="13.426">
          PRESS RELEASE
        </tspan>
        <tspan
          style={{ letterSpacing: '-0.004020451899950757em' }}
          x="69.151"
          y="13.426"
        >
          W
        </tspan>
        <tspan
          style={{ letterSpacing: '0.000052900682894088904em' }}
          x="77.421"
          y="13.426"
        >
          ORLD
        </tspan>
        <tspan
          style={{ letterSpacing: '-0.002962438242068979em' }}
          x="104.539"
          y="13.426"
        >
          W
        </tspan>
        <tspan x="112.818" y="13.426">
          IDE
        </tspan>
      </tspan>
    </text>
    <text />
    <text
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(330.501 199.675)"
    >
      GGC I
      <tspan
        style={{ letterSpacing: '-0.0030065225931813007em' }}
        x="40.145"
        y="0"
      >
        C
      </tspan>
      <tspan x="50.612" y="0">
        O
      </tspan>
      <tspan x="0" y="18.125">
        PUBLIC PRESALE
      </tspan>
    </text>
    <text />
    <text
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(330.501 289.135)"
    >
      GGC I
      <tspan
        style={{ letterSpacing: '-0.0030065225931813007em' }}
        x="40.145"
        y="0"
      >
        C
      </tspan>
      <tspan x="50.612" y="0">
        O
      </tspan>
      <tspan x="0" y="18.125">
        PUBLIC SALE
      </tspan>
    </text>
    <text />
    <text
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(4.249 438.945)"
    >
      ES
      <tspan
        style={{ letterSpacing: '-0.037985634913849764em' }}
        x="17.007"
        y="0"
      >
        T
      </tspan>
      <tspan x="23.833" y="0">
        ABLISH U
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.004994706888672161em' }}
        x="89.171"
        y="0"
      >
        K
      </tspan>
      <tspan x="98.702" y="0">
        RAINIAN
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.008987239579617222em' }}
        x="65.353"
        y="17.621"
      >
        I
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.028982231234269205em' }}
        x="69.718"
        y="17.621"
      >
        .T
      </tspan>
      <tspan x="79.701" y="17.621">
        .
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.00299035849321796em' }}
        x="86.483"
        y="17.621"
      >
        C
      </tspan>
      <tspan x="96.95" y="17.621">
        OM
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.03400926632286805em' }}
        x="122.324"
        y="17.621"
      >
        P
      </tspan>
      <tspan x="130.782" y="17.621">
        ANY
      </tspan>
    </text>
    <text />
    <text
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(49.127 509.598)"
    >
      G - SP
      <tspan
        style={{ letterSpacing: '-0.009989413777344322em' }}
        x="40.523"
        y="0"
      >
        O
      </tspan>
      <tspan x="52.621" y="0">
        T OFFICE
      </tspan>
      <tspan style={{ fontSize: '9.23015022277832px' }}>
        <tspan x="-20.318" y="12.587">
          HEADQ
        </tspan>
        <tspan
          style={{ letterSpacing: '-0.00896666575054807em' }}
          x="12.67"
          y="12.587"
        >
          U
        </tspan>
        <tspan x="19.233" y="12.587">
          ARTERS S
        </tspan>
        <tspan
          style={{ letterSpacing: '-0.0030153389249630677em' }}
          x="59.521"
          y="12.587"
        >
          W
        </tspan>
        <tspan x="67.801" y="12.587">
          ITZER
        </tspan>
        <tspan
          style={{ letterSpacing: '0.0309998001759361em' }}
          x="91.586"
          y="12.587"
        >
          L
        </tspan>
        <tspan
          style={{ letterSpacing: '0.000026450341447044452em' }}
          x="96.478"
          y="12.587"
        >
          AND
        </tspan>
      </tspan>
    </text>
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
        GINGR
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.00297419439325462em' }}
        x="51.382"
        y="17.621"
      >
        C
      </tspan>
      <tspan x="61.85" y="17.621">
        ONN
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.00297419439325462em' }}
        x="97.509"
        y="17.621"
      >
        E
      </tspan>
      <tspan x="106.36" y="17.621">
        CT
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
    <text
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(329.619 572.899)"
    >
      GINGR CRYP
      <tspan
        style={{ letterSpacing: '-0.009989413777344322em' }}
        x="89.58"
        y="0"
      >
        T
      </tspan>
      <tspan x="96.83" y="0">
        O SHARE
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.013998110568252722em' }}
        x="0"
        y="17.621"
      >
        (
      </tspan>
      <tspan x="4.939" y="17.621">
        GCS) SALE
      </tspan>
    </text>
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
      2
      <tspan
        style={{ letterSpacing: '-0.005015980113636364em' }}
        x="11.396"
        y="0"
      >
        0
      </tspan>
      <tspan x="25.058" y="0">
        20
      </tspan>
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
      R
      <tspan
        style={{ letterSpacing: '-0.004991560546722198em' }}
        x="15.766"
        y="0"
      >
        O
      </tspan>
      <tspan x="34.585" y="0">
        AD MAP
      </tspan>
    </text>
    <text
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(61.895 575.618)"
    >
      GGC
      <tspan
        style={{ letterSpacing: '-0.03400926632286805em' }}
        x="35.645"
        y="0"
      >
        P
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.04997939708664829em' }}
        x="44.103"
        y="0"
      >
        A
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.017004633161434024em' }}
        x="53.346"
        y="0"
      >
        Y
      </tspan>
      <tspan
        style={{ letterSpacing: '0.000016164099963340326em' }}
        x="61.759"
        y="0"
      >
        MENT
      </tspan>
      <tspan x="-61.895" y="17.621">
        SYSTEM IN
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.00299035849321796em' }}
        x="11.947"
        y="17.621"
      >
        C
      </tspan>
      <tspan x="22.414" y="17.621">
        OPOR
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.036999624816086006em' }}
        x="65.927"
        y="17.621"
      >
        A
      </tspan>
      <tspan
        style={{ letterSpacing: '0.000016164099963340326em' }}
        x="75.367"
        y="17.621"
      >
        TED
      </tspan>
    </text>
    <text />
    <text
      style={{
        fontSize: '15.103879928588867px',
        fill: '#fff',
        fontFamily: 'brandon_grotesque_regularRg, Brandon Grotesque',
      }}
      transform="translate(70.642 311.658)"
    >
      DEVE
      <tspan
        style={{ letterSpacing: '-0.006982891184163021em' }}
        x="39.043"
        y="0"
      >
        L
      </tspan>
      <tspan x="46.474" y="0">
        OPING
      </tspan>
      <tspan x="22.852" y="18.125">
        GINGR 2
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.01598629486374358em' }}
        x="82.058"
        y="18.125"
      >
        .
      </tspan>
      <tspan x="85.275" y="18.125">
        0
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
      <tspan xmlSpace="preserve">1. OC</tspan>
      <tspan
        style={{ letterSpacing: '-0.009987571022727272em' }}
        x="27.708"
        y="0"
      >
        T
      </tspan>
      <tspan x="32.988" y="0">
        OBER
      </tspan>
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
      1. N
      <tspan
        style={{ letterSpacing: '-0.004993785511363636em' }}
        x="17.237"
        y="0"
      >
        O
      </tspan>
      <tspan
        style={{ letterSpacing: '-0.000022194602272727273em' }}
        x="26.103"
        y="0"
      >
        VEMBER
      </tspan>
    </text>
    <text />
  </svg>
);

export default Roadmap;
