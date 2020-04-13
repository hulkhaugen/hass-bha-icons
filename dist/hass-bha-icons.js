const iconset = document.createElement("ha-iconset-svg");
iconset.name = "bha";
iconset.size = "24";
iconset.innerHTML = `<svg><defs>
<g id="ceiling-fan"><path d="m 8,4.9996296 v 1.9999997 h 2 1 v 5.2675787 c -0.618917,0.357331 -1.0001326,1.017757 -1,1.732422 v 1 h 4 v -1 c 1.33e-4,-0.714665 -0.381083,-1.375091 -1,-1.732422 V 6.9996293 h 1 2 V 4.9996296 H 14 10 Z M 6,13.99963 c -2.209139,0 -4,0.671573 -4,1.499999 0,0.828427 1.790861,1.5 4,1.5 2.209139,0 4,-0.671573 4,-1.5 C 10,14.671203 8.209139,13.99963 6,13.99963 Z m 12,0 c -2.209139,0 -4,0.671573 -4,1.499999 0,0.828427 1.790861,1.5 4,1.5 2.209139,0 4,-0.671573 4,-1.5 0,-0.828426 -1.790861,-1.499999 -4,-1.499999 z m -8,1.999999 v 1 c -1.326e-4,0.714663 0.381083,1.37509 1,1.732422 0.618802,0.357265 1.381198,0.357265 2,0 0.618917,-0.357331 1.000133,-1.017757 1,-1.732422 v -1 z"/></g>
<g id="ceiling-fan-light"><path d="m 8,3.679875 v 2 h 2 1 v 5.267578 a 2,2 0 0 0 -1,1.732422 v 1 h 4 v -1 A 2,2 0 0 0 13,10.947453 V 5.679875 h 1 2 v -2 h -2 -4 z m -2,9 a 3.9999998,1.5 0 0 0 -4,1.5 3.9999998,1.5 0 0 0 4,1.5 3.9999998,1.5 0 0 0 4,-1.5 3.9999998,1.5 0 0 0 -4,-1.5 z m 12,0 a 3.9999998,1.5 0 0 0 -4,1.5 3.9999998,1.5 0 0 0 4,1.5 3.9999998,1.5 0 0 0 4,-1.5 3.9999998,1.5 0 0 0 -4,-1.5 z m -8,2 v 1 a 2,2 0 0 0 1,1.732422 2,2 0 0 0 2,0 2,2 0 0 0 1,-1.732422 v -1 z m -0.5371094,1.886719 -1.7324218,1 0.5,0.867187 1.7324218,-1 z m 5.0742184,0 -0.5,0.867187 1.732422,1 0.5,-0.867187 z M 11.5,18.3205 v 2 h 1 v -2 z"/></g>
<g id="ceiling-lamp"><path d="m11 2v5.6738a3 3 0 0 0 -0.5 0.22852 3 3 0 0 0 -1.4902 2.4238 10 7 0 0 0 -2.0098 0.61133 10 7 0 0 0 -5 6.0625h20a10 7 0 0 0 -5 -6.0625 10 7 0 0 0 -2.0078 -0.60938 3 3 0 0 0 -1.4922 -2.4258 3 3 0 0 0 -0.5 -0.22656v-5.6758h-2zm-2 17a3 3 0 0 0 1.5 2.5977 3 3 0 0 0 3 0 3 3 0 0 0 1.5 -2.5977h-6z"/></g>
<g id="ceiling-lamp-plafond"><path d="m7.6 4.8256v1.7488h3.5256v2.9621c-0.91334-0.87498-2.0664-1.5061-3.4289-1.5061-1.5609 0-3.1141 1.0253-4.1314 2.3504 0.06152-0.0036 0.12313-0.0058 0.18477-0.0064 0.53427 7.56e-4 1.0625 0.11269 1.5512 0.32871 0.64986-0.61129 1.5111-1.0227 2.3955-1.0227 1.7571 0 3.1924 1.3073 3.4289 2.9992 0.28648-0.06838 0.57988-0.10374 0.87441-0.10527 0.29454 0.0015 0.58793 0.03685 0.87441 0.10527 0.23635-1.6919 1.6718-2.9992 3.4289-2.9992 0.88436 0 1.7474 0.41273 2.3977 1.0248 0.48783-0.21646 1.0153-0.32913 1.549-0.33086 0.06309 0.0013 0.12612 0.0042 0.18906 0.0086-1.0173-1.3267-2.5734-2.3525-4.1357-2.3525-1.3626 0-2.5154 0.63312-3.4289 1.5082v-2.9643h3.5256v-1.7488zm-3.85 6.6488c-1.5188 0-2.75 1.2312-2.75 2.75s1.2312 2.75 2.75 2.75 2.75-1.2312 2.75-2.75-1.2312-2.75-2.75-2.75zm16.5 0c-1.5188 0-2.75 1.2312-2.75 2.75s1.2312 2.75 2.75 2.75 2.75-1.2312 2.75-2.75-1.2312-2.75-2.75-2.75zm-8.25 2.2c-1.5188 0-2.75 1.2312-2.75 2.75s1.2312 2.75 2.75 2.75 2.75-1.2312 2.75-2.75-1.2312-2.75-2.75-2.75z"/></g>
<g id="ceiling-lamp-round"><path d="m9 2.5v1a3 1.5 0 0 0 1.5 1.2988 3 1.5 0 0 0 0.5 0.11328v3.8242a11 7.15 0 0 1 1 -0.037109 11 7.15 0 0 1 1 0.033203v-3.8203a3 1.5 0 0 0 0.5 -0.11328 3 1.5 0 0 0 1.5 -1.2988v-1h-6zm3 7.1992a10 6.15 0 0 0 -10 6.1504 10 6.15 0 0 0 10 6.1504 10 6.15 0 0 0 10 -6.1504 10 6.15 0 0 0 -10 -6.1504z"/></g>
<g id="chandelier"><path d="m9 2.0004v1c1.701e-4 0.53581 0.57194 1.0309 1.5 1.2988 0.23509 0.067489 0.48738 0.11874 0.75 0.15234l-2e-3 5.6344c0.24619-0.0556 0.49959-0.08442 0.75195-0.08594 0.2523 8.81e-4 0.50376 0.02904 0.75 0.08398v-5.6324c0.26262-0.033604 0.51491-0.084851 0.75-0.15234 0.92806-0.26791 1.4998-0.76299 1.5-1.2988v-1h-6zm3 8.9996c-1.3807 0-2.5 1.1193-2.5 2.5s1.1193 2.5 2.5 2.5 2.5-1.1193 2.5-2.5-1.1193-2.5-2.5-2.5zm-7.5 2c-1.3807 0-2.5 1.1193-2.5 2.5s1.1193 2.5 2.5 2.5 2.5-1.1193 2.5-2.5-1.1193-2.5-2.5-2.5zm15 0c-1.3807 0-2.5 1.1193-2.5 2.5s1.1193 2.5 2.5 2.5 2.5-1.1193 2.5-2.5-1.1193-2.5-2.5-2.5zm-8.2949 3.9043c-0.21486 1.5381-1.5198 2.7266-3.1172 2.7266-0.80396 0-1.5886-0.37521-2.1797-0.93164-0.44348 0.19678-0.92303 0.29921-1.4082 0.30078-0.057347-0.0012-0.11466-0.0038-0.17188-0.0078 0.92479 1.2061 2.3395 2.1387 3.7598 2.1387 1.2597 0 2.3252-0.59164 3.1621-1.4082v1.5273c0 0.41421 0.33579 0.75 0.75 0.75 0.39939-5.51e-4 0.72829-0.3511 0.74805-0.75v-1.5273c0.83704 0.81754 1.9035 1.4082 3.1641 1.4082 1.419 0 2.831-0.93211 3.7559-2.1367-0.05593 0.0033-0.11194 0.0053-0.16797 0.0059-0.4857-6.87e-4 -0.96593-0.10245-1.4102-0.29883-0.59078 0.55572-1.3737 0.92969-2.1777 0.92969-1.5974 0-2.9022-1.1885-3.1172-2.7266-0.26044 0.06216-0.52716 0.09431-0.79492 0.0957-0.26776-0.0014-0.53448-0.0335-0.79492-0.0957z"/></g>
<g id="floor-lamp"><path d="m7.5 2l2.5 7h4l2.5-7h-9zm3.7891 8l-4.3691 12h1.0645l3.5156-9.6562v9.6562h1v-9.6504l3.5117 9.6504h1.0645l-4.3672-12h-1.4199z"/></g>
<g id="floor-lamp-dual"><path d="m8.9277 1.9844l-6.9277 3.998v0.0019531l5.666 4.8105 2.5977-1.5-1.3359-7.3105zm6.1875 0l-1.3359 7.3125 2.5996 1.5 5.6641-4.8125v-0.0019531l-6.9277-3.998zm-4.5352 8.8613l-1.7324 1 2.1523 3.7266v4.4277h-3v2h8v-2h-3v-4.3516l2.1953-3.8027-1.7324-1-1.4414 2.4961-1.4414-2.4961z"/></g>
<g id="led-strip"><path d="m2.1641 2l-1.1641 4.3457 19.801 5.3066 0.64844-2.4141c0.28677-1.0702-0.34382-2.1624-1.4141-2.4492l-17.871-4.7891zm1.9062 1.5723c0.082909 0.0049769 0.16665 0.018681 0.25 0.041016 0.66683 0.17868 1.0634 0.86442 0.88477 1.5312-0.17868 0.66683-0.86442 1.0615-1.5312 0.88281-0.66683-0.17868-1.0634-0.86442-0.88477-1.5312 0.15634-0.58348 0.70089-0.95867 1.2812-0.92383zm3.623 0.9707c0.082909 0.0049769 0.16665 0.018681 0.25 0.041016 0.66683 0.17868 1.0615 0.86442 0.88281 1.5312-0.17868 0.66683-0.86442 1.0615-1.5312 0.88281-0.66683-0.17868-1.0615-0.86442-0.88281-1.5312 0.15634-0.58348 0.70089-0.95867 1.2812-0.92383zm3.8633 1.0352c0.082909 0.0049769 0.16665 0.018681 0.25 0.041016 0.66683 0.17868 1.0634 0.86442 0.88476 1.5312-0.17868 0.66683-0.86442 1.0615-1.5312 0.88281-0.66683-0.17868-1.0634-0.86442-0.88476-1.5312 0.15634-0.58348 0.70089-0.95867 1.2812-0.92383zm3.623 0.9707c0.082908 0.0049769 0.16664 0.018681 0.25 0.041016 0.66683 0.17868 1.0615 0.86442 0.88281 1.5312-0.17868 0.66683-0.86442 1.0615-1.5312 0.88281-0.66683-0.17868-1.0615-0.86442-0.88281-1.5312 0.15634-0.58348 0.70089-0.95867 1.2812-0.92383zm3.6211 0.9707c0.082909 0.0049769 0.16665 0.018681 0.25 0.041016 0.66683 0.17868 1.0634 0.86442 0.88477 1.5312-0.17868 0.66683-0.86442 1.0615-1.5312 0.88281-0.66683-0.17868-1.0634-0.86442-0.88477-1.5312 0.15634-0.58348 0.70089-0.95867 1.2812-0.92383zm-7.3789 2.6191l-6.3613 1.709 7.5156 2.0137 6.3613-1.709-7.5156-2.0137zm-8.2246 2.209l-0.64648 2.4141c-0.28677 1.0702 0.34382 2.1624 1.4141 2.4492l17.871 4.7891 1.1641-4.3457-19.803-5.3066zm2.1484 1.6367c0.082909 0.004977 0.16665 0.018681 0.25 0.041016 0.66683 0.17868 1.0634 0.86442 0.88477 1.5312-0.17868 0.66683-0.86442 1.0615-1.5312 0.88281-0.66683-0.17868-1.0634-0.86442-0.88477-1.5312 0.15634-0.58348 0.70089-0.95867 1.2812-0.92383zm3.623 0.9707c0.082909 0.004977 0.16665 0.018681 0.25 0.041016 0.66683 0.17868 1.0615 0.86442 0.88281 1.5312-0.17868 0.66683-0.86442 1.0615-1.5312 0.88281-0.66683-0.17868-1.0615-0.86442-0.88281-1.5312 0.15634-0.58348 0.70089-0.95866 1.2812-0.92383zm3.6211 0.9707c0.082909 0.004977 0.16665 0.018681 0.25 0.041016 0.66683 0.17868 1.0634 0.86442 0.88476 1.5312-0.17868 0.66683-0.86442 1.0615-1.5312 0.88281-0.66683-0.17868-1.0634-0.86442-0.88476-1.5312 0.15634-0.58348 0.70089-0.95867 1.2812-0.92383zm3.8633 1.0352c0.082909 0.004976 0.16665 0.01868 0.25 0.041015 0.66683 0.17868 1.0634 0.86442 0.88477 1.5312-0.17868 0.66683-0.86442 1.0615-1.5312 0.88281-0.66683-0.17868-1.0615-0.86442-0.88281-1.5312 0.15634-0.58348 0.69894-0.95867 1.2793-0.92383zm3.623 0.9707c0.082909 0.004977 0.16665 0.01868 0.25 0.041015 0.66683 0.17868 1.0615 0.86442 0.88281 1.5312-0.17868 0.66683-0.86246 1.0615-1.5293 0.88281-0.66683-0.17868-1.0634-0.86442-0.88477-1.5312 0.15634-0.58348 0.70089-0.95867 1.2812-0.92383z"/></g>
<g id="light-string"><path d="m2 5.8466v0.8c0.75787 0.38389 1.5092 0.7863 2.2969 1.1045l-0.51758 1.9316 2.3184 0.62109 0.50781-1.8965c1.1775 0.27494 2.5459 0.49902 4.1953 0.57031v1.9746h2.3984v-1.9746c1.6494-0.07129 3.0178-0.29537 4.1953-0.57031l0.50781 1.8965 2.3184-0.62109-0.51758-1.9316c0.71798-0.27525 1.5617-0.69894 2.2969-1.1045v-0.7s-0.88935 0.49447-2.498 1.109c-1.6087 0.61453-4.0765 1.234-7.502 1.234-3.4254 0-5.8933-0.61947-7.502-1.234-1.6087-0.61453-2.498-1.209-2.498-1.209zm18.533 4.594c-0.03561-1.58e-4 -0.07108 0.0044-0.10547 0.01367l-2.3184 0.62305c-0.21273 0.05704-0.33933 0.27531-0.2832 0.48828l0.23438 0.87305c-0.56785 0.67808-0.8128 1.6097-0.56641 2.5293 0.39998 1.4941 1.9357 2.3809 3.4297 1.9805 1.4941-0.39998 2.3809-1.9357 1.9805-3.4297-0.2464-0.91956-0.92311-1.6049-1.7539-1.9082l-0.23438-0.87305c-0.04636-0.17376-0.20298-0.29522-0.38281-0.29688zm-17.08 2e-3c-0.1749 0.0065-0.32524 0.12602-0.37109 0.29492l-0.23242 0.87305c-0.83081 0.30331-1.5075 0.98864-1.7539 1.9082-0.40046 1.494 0.48633 3.0297 1.9805 3.4297 1.4934 0.39921 3.0277-0.48731 3.4277-1.9805 0.2464-0.91956 0.00338-1.8512-0.56445-2.5293l0.23438-0.87309c0.056122-0.21297-0.070476-0.43124-0.2832-0.48828l-2.3184-0.62305c-0.038901-0.0099-0.079064-0.01381-0.11914-0.01172zm7.3477 1.3105c-0.22122-2.16e-4 -0.40061 0.17917-0.40039 0.40039v0.9043c-0.724 0.508-1.2012 1.3429-1.2012 2.2949-4.321e-4 1.547 1.2538 2.8012 2.8008 2.8008 1.547 4.32e-4 2.8012-1.2538 2.8008-2.8008 0-0.952-0.47717-1.7869-1.2012-2.2949v-0.9043c2.16e-4 -0.22122-0.17917-0.40061-0.40039-0.40039z"/></g>
<g id="mirror-lamp"><path d="m4 4c-1.108 0-2 0.892-2 2v12c0 1.108 0.892 2 2 2h16c1.108 0 2-0.892 2-2v-12c0-1.108-0.892-2-2-2zm0 2h2v12h-2zm14 0h2v12h-2z"/></g>
<g id="outdoor-lamp"><path d="m12.5 2-0.5 2-2 2.3047-5 2.6953h2l2.5 9 2.5 2 0.5 2h1l0.5-2 2.5-2 2.5-9h2l-5-2.6953-2-2.3047-0.5-2zm-3.5 7h8l-2.2227 8h-3.5547zm-6 5v8h8.5l-0.5-2h-3l-3-3v-3z"/></g>
<g id="outdoor-lamp-solo"><path d="m11.45 1-0.55 2.2-2.2 2.5352-5.5 2.9648h2.2l2.75 9.9 2.75 2.2 0.55 2.2h1.1l0.55-2.2 2.75-2.2 2.75-9.9h2.2l-5.5-2.9648-2.2-2.5352-0.55-2.2zm-3.85 7.7h8.8l-2.445 8.8h-3.9102z"/></g>
<g id="outdoor-lamp-variant"><path d="m3 3.5v8.5h2v-3.2695c0.51914-0.1507 1.1099-0.34136 1.4258-0.51562 0.67113-0.36797 1.0349-0.84083 1.3574-1.4805 0.1075-0.21417 0.16744-0.37101 0.2793-0.72461 0.28037-0.88831 0.5109-1.4068 0.99609-1.7188 0.38932-0.25011 0.6586-0.36523 1.2891-0.36523 0.48519 0 0.69557 0.10636 1.0762 0.33203 0.78154 0.46284 1.1795 1.2829 1.2754 2.2402 0.01988 0.78739 0 2.1713 0 3.002l-6.3984 4.5h14.699l-6.4297-4.5c0.0054-0.83588 0.02975-2.5731 0-3.3535-0.05084-0.3536-0.14976-0.60348-0.25-0.9082-0.53168-1.6214-1.6735-2.84-3.2715-3.1562-0.33553-0.066118-0.23541-0.074219-0.70898-0.074219-0.50844 0.0014-0.49079 0.016232-0.90625 0.099609-1.6241 0.32771-2.5196 1.4227-3.1094 3.3086-0.1104 0.3536-0.14896 0.43843-0.26953 0.61523-0.097329 0.14086-0.19879 0.25032-0.32227 0.34375-0.20684 0.15684-0.45129 0.30499-0.73242 0.41797v-3.293zm7.6504 11.5c-6.56e-4 1.7071-0.0057 3.4174 0.01367 5.123 0.10299 0.92675 1.0621 1.6565 2.4277 1.8496 0.26418 0.03743 0.85496 0.03743 1.1191 0 1.0858-0.15421 1.9289-0.65127 2.2715-1.334 0.07836-0.1572 0.13386-0.33961 0.15625-0.53125 0.02725-1.7005 0.01172-3.4056 0.01172-5.1074z"/></g>
<g id="roborock"><path d="m12 2c-4.6581 0-8.5603 3.1891-9.6719 7.5h6.7324c0.27934-1.3661 1.4936-2.4004 2.9395-2.4004 1.4459 0 2.6601 1.0343 2.9395 2.4004h6.7324c-1.1116-4.3109-5.0138-7.5-9.6719-7.5zm0 6.0996c-1.1105 0-2 0.88951-2 2 0 1.1105 0.88951 2 2 2 1.1105 0 2-0.88951 2-2-1e-6 -1.1105-0.88951-2-2-2zm-9.875 2.4004c-0.074044 0.49072-0.125 0.98863-0.125 1.5 0.00314 0.5837 0.057387 1.166 0.16211 1.7402l2.5352-0.45117c0.46433 2.1646 1.7512 4.0259 3.5527 5.1387 2.3205 1.4291 5.1795 1.4291 7.5 0 1.8019-1.1132 3.0889-2.9753 3.5527-5.1406l2.543 0.45312c0.1021-0.57447 0.15373-1.1568 0.1543-1.7402 0-0.51137-0.050956-1.0093-0.125-1.5h-6.916c-0.19863 1.4615-1.445 2.5996-2.959 2.5996s-2.7604-1.1381-2.959-2.5996h-6.916zm17.846 4.4297c-1.2275 3.3433-4.4092 5.5668-7.9707 5.5703-3.561-0.003241-6.7425-2.2259-7.9707-5.5684l-1.4941 0.26758c1.3713 4.0612 5.1784 6.7967 9.4648 6.8008 4.2862-0.0052 8.0925-2.7415 9.4629-6.8027l-1.4922-0.26758z"/></g>
<g id="smoke-detector"><path d="m2 2v4.3242c0 1.0542 0.75172 1.9319 1.75 2.123 0.27958 1.9387 1.0405 4.5527 3.0957 4.5527h10.309c2.0546 0 2.8161-2.6134 3.0957-4.5527 0.99828-0.19111 1.75-1.0688 1.75-2.123v-4.3242h-20zm3.25 6.5h1.75l0.59961 3h-0.75391c-0.98306 0-1.3342-1.4057-1.5957-3zm3.25 0h2.75v3h-2.1504l-0.59961-3zm4.25 0h2.75l-0.59961 3h-2.1504v-3zm4.25 0h1.75c-0.26098 1.5943-0.6191 2.8554-1.5938 3h-0.75391l0.59766-3zm-6.9414 5.9766l-1.5059 0.87695s-0.33011 0.18754-0.60156 0.54102c-0.27145 0.35348-0.4975 0.96833-0.24023 1.6211 0.27593 0.69986 0.59006 1.1148 0.59375 1.332 0.00217 0.12708-0.031092 0.27683-0.33203 0.58398l-1.8066 1.8438 2.3633-1.0352c0.069712-0.03055 0.087992-0.08255 0.15234-0.11523l0.0039063 0.007812c0.00499-0.005099 0.0028825-0.010534 0.0078125-0.015624 0.38702-0.1987 0.72798-0.41502 0.92188-0.69727 0.22829-0.33232 0.29924-0.71668 0.26953-1.0508-0.059411-0.66821-0.43424-1.1873-0.62109-1.4961-0.2428-0.39976-0.015625-0.85352-0.015625-0.85352l0.81055-1.543zm3.9082 0l-1.5039 0.87695s-0.37511 0.21525-0.68359 0.61719c-0.30849 0.40194-0.56484 1.0865-0.27344 1.8262 0.25328 0.64176 0.5802 1.0935 0.67188 1.3965 0.04584 0.15151 0.052549 0.25081 0.011719 0.38672s-0.14684 0.32343-0.39453 0.57617l-1.8066 1.8438 2.3652-1.0352c0.07022-0.03075 0.08702-0.080779 0.15234-0.11328l0.003907 0.00586c0.0065-0.0067 0.007201-0.012881 0.013672-0.019531 0.45897-0.23188 0.85174-0.48692 1.0742-0.81055 0.25755-0.37464 0.33623-0.80345 0.30274-1.1816-0.06699-0.75638-0.49913-1.3602-0.72266-1.7285-0.31415-0.51876-0.019531-1.0996-0.019531-1.0996l0.80859-1.541zm3.8672 0.001954l-1.502 0.875s-0.33011 0.18754-0.60156 0.54102c-0.27145 0.35348-0.49945 0.96833-0.24219 1.6211 0.2191 0.55454 0.49498 0.93957 0.56641 1.1758 0.03571 0.1181 0.039605 0.18368 0.009765 0.2832-0.02987 0.09953-0.11068 0.24905-0.31445 0.45703l-1.8066 1.8438 2.3652-1.0352c0.06922-0.03033 0.08645-0.0828 0.15039-0.11523l0.00586 0.007812c0.0069-7e-3 0.006902-0.014484 0.013672-0.021484 0.38277-0.19782 0.72156-0.41124 0.91406-0.69141 0.22832-0.33231 0.30116-0.71666 0.27148-1.0508-0.059349-0.66824-0.43588-1.1871-0.62305-1.4961-0.24238-0.39988-0.015625-0.85547-0.015625-0.85547l0.80859-1.5391z"/></g>
<g id="stairs"><path d="m22 2-20 12v1.5l1.5-0.90039v2.4004h1.5v-3.3008l14-8.3984v2.6992h1.5v-3.5996l1.5-0.90039v-1.5zm-5 8v3h-5v3h-5v3h-5v3h5l15-9v-3h-5z"/></g>
<g id="thermostat"><path d="m12 2c-5.511 0-10 4.489-10 10s4.489 10 10 10 10-4.489 10-10-4.489-10-10-10zm0 2c4.4301 0 8 3.5699 8 8s-3.5699 8-8 8-8-3.5699-8-8 3.5699-8 8-8zm3.5 1.9375l-6.0977 4.5625a3 3 0 0 0 0 3 3 3 0 0 0 2.5977 1.5 3 3 0 0 0 2.5977 -1.5l0.90234-7.5625z"/></g>
<g id="xmas-candle-bridge"><path d="m12 2c-0.4155 0-0.75 0.3345-0.75 0.75v7l0.75-0.75 0.75 0.75v-7c0-0.4155-0.3345-0.75-0.75-0.75zm-3 3c-0.4155 0-0.75 0.3345-0.75 0.75v6.998l1.5-1.5v-5.498c0-0.4155-0.3345-0.75-0.75-0.75zm6 0c-0.4155 0-0.75 0.3345-0.75 0.75v5.5l1.5 1.5v-7c0-0.4155-0.3345-0.75-0.75-0.75zm-9 3c-0.4155 0-0.75 0.3345-0.75 0.75v7l1.5-1.5v-5.5c0-0.4155-0.3345-0.75-0.75-0.75zm12 0c-0.4155 0-0.75 0.3345-0.75 0.75v5.7559l1.5 1.5v-7.2559c0-0.4155-0.3345-0.75-0.75-0.75zm-15 3c-0.4155 0-0.75 0.3345-0.75 0.75v7l1.5-1.5v-5.5c0-0.4155-0.3345-0.75-0.75-0.75zm9 0l-2.1211 2.1211-8.8789 8.8789h4.2441l6.7559-6.7578 6.7559 6.7578h4.2441l-8.8789-8.8789-2.1211-2.1211zm9 0c-0.4155 0-0.75 0.3345-0.75 0.75v5.5l1.5 1.5v-7c0-0.4155-0.3345-0.75-0.75-0.75z"/></g>
<g id="xmas-star"><path d="m12 22-1.6434-7.1085-6.5823 3.1472 4.533-5.7169-6.5646-3.1839 7.2959-0.020362-1.6036-7.1176 4.5649 5.6915l4.5649-5.6915-1.6036 7.1176 7.2959 0.020362-6.5646 3.1839 4.533 5.7169-6.5823-3.1472z"/></g>
<g id="path-light"><path d="m11.971 3.3438a0.27961 0.94368 0 0 0 -0.26758 0.65625h-0.73242l-6 5h14l-6-5h-0.73438a0.27961 0.94368 0 0 0 -0.26562 -0.65625zm-1 6.6562v10l1 2 1-2v-10h-2z"/></g>
<g id="table-lamp-variant"><path d="m10 2-2.5 7h9l-2.5-7zm1.2891 8-4.3691 12h1.0645l3.5156-9.6562v9.6562h1v-9.6504l3.5117 9.6504h1.0645l-4.3672-12h-1.4199z"/></g>
</defs></svg>`;
document.body.appendChild(iconset);
