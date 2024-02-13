// Import images
import sunny from "../Images/ImageAssets/Sunny.jpg";
import partlyCloudy from "../Images/ImageAssets/Partly_cloudy.jpg";
import cloudy from "../Images/ImageAssets/Cloudy.jpg";
import overcast from "../Images/ImageAssets/Overcast.jpg";
import mist from "../Images/ImageAssets/Mist.jpg";
import patchyRainPossible from "../Images/ImageAssets/Patchy_rain_possible.jpg";
import patchySnowPossible from "../Images/ImageAssets/Patchy_snow_possible.jpg";
import patchySleetPossible from "../Images/ImageAssets/Patchy_sleet_possible.jpg";
import patchyFreezingDrizzlePossible from "../Images/ImageAssets/Patchy_freezing_drizzle_possible.jpg";
import thunderyOutbreaksPossible from "../Images/ImageAssets/Thundery_outbreaks_possible.jpg";
import blowingSnow from "../Images/ImageAssets/Blowing_snow.jpg";
import blizzard from "../Images/ImageAssets/Blizzard.jpg";
import fog from "../Images/ImageAssets/Fog.jpg";
import freezingFog from "../Images/ImageAssets/Freezing_fog.jpg";
import patchyLightDrizzle from "../Images/ImageAssets/Patchy_light_drizzle.jpg";
import lightDrizzle from "../Images/ImageAssets/Light_drizzle.jpg";
import freezingDrizzle from "../Images/ImageAssets/Freezing_drizzle.jpg";
import heavyFreezingDrizzle from "../Images/ImageAssets/Heavy_freezing_drizzle.jpg";
import patchyLightRain from "../Images/ImageAssets/Patchy_light_rain.jpg";
import lightRain from "../Images/ImageAssets/Light_rain.jpg";
import moderateRainAtTimes from "../Images/ImageAssets/Moderate_rain_at_times.jpg";
import moderateRain from "../Images/ImageAssets/Moderate_rain.jpg";
import heavyRainAtTimes from "../Images/ImageAssets/Heavy_rain_at_times.jpg";
import heavyRain from "../Images/ImageAssets/Heavy_rain.jpg";
import lightFreezingRain from "../Images/ImageAssets/Light_freezing_rain.jpg";
import moderateOrHeavyFreezingRain from "../Images/ImageAssets/Moderate_or_heavy_freezing_rain.jpg";
import lightSleet from "../Images/ImageAssets/Light_sleet.jpg";
import moderateOrHeavySleet from "../Images/ImageAssets/Moderate_or_heavy_sleet.jpg";
import patchyLightSnow from "../Images/ImageAssets/Patchy_light_snow.jpg";
import lightSnow from "../Images/ImageAssets/Light_snow.jpg";
import patchyModerateSnow from "../Images/ImageAssets/Patchy_moderate_snow.jpg";
import moderateSnow from "../Images/ImageAssets/Moderate_snow.jpg";
import patchyHeavySnow from "../Images/ImageAssets/Patchy_heavy_snow.jpg";
import heavySnow from "../Images/ImageAssets/Heavy_snow.jpg";
import icePellets from "../Images/ImageAssets/Ice_pellets.jpg";
import lightRainShower from "../Images/ImageAssets/Light_rain_shower.jpg";
import moderateOrHeavyRainShower from "../Images/ImageAssets/Moderate_or_heavy_rain_shower.jpg";
import torrentialRainShower from "../Images/ImageAssets/Torrential_rain_shower.jpg";
import lightSleetShowers from "../Images/ImageAssets/Light_sleet_showers.jpg";
import moderateOrHeavySleetShowers from "../Images/ImageAssets/Moderate_or_heavy_sleet_showers.jpg";
import lightSnowShowers from "../Images/ImageAssets/Light_snow_showers.jpg";
import moderateOrHeavySnowShowers from "../Images/ImageAssets/Moderate_or_heavy_snow_showers.jpg";
import lightShowersOfIcePellets from "../Images/ImageAssets/Light_showers_of_ice_pellets.jpg";
import moderateOrHeavyShowersOfIcePellets from "../Images/ImageAssets/Moderate_or_heavy_showers_of_ice_pellets.jpg";
import patchyLightRainWithThunder from "../Images/ImageAssets/Patchy_light_rain_with_thunder.jpg";
import moderateOrHeavyRainWithThunder from "../Images/ImageAssets/Moderate_or_heavy_rain_with_thunder.jpg";
import patchyLightSnowWithThunder from "../Images/ImageAssets/Patchy_light_snow_with_thunder.jpg";
import moderateOrHeavySnowWithThunder from "../Images/ImageAssets/Moderate_or_heavy_snow_with_thunder.jpg";

import { useAppContext } from "../../../Context";

function WeatherImages() {
  const { data } = useAppContext();
  switch (data?.current?.condition?.code) {
    case 1000:
      return sunny;
    case 1003:
      return partlyCloudy;
    case 1006:
      return cloudy;
    case 1009:
      return overcast;
    case 1030:
      return mist;
    case 1063:
      return patchyRainPossible;
    case 1066:
      return patchySnowPossible;
    case 1069:
      return patchySleetPossible;
    case 1072:
      return patchyFreezingDrizzlePossible;
    case 1087:
      return thunderyOutbreaksPossible;
    case 1114:
      return blowingSnow;
    case 1117:
      return blizzard;
    case 1135:
      return fog;
    case 1147:
      return freezingFog;
    case 1150:
      return patchyLightDrizzle;
    case 1153:
      return lightDrizzle;
    case 1168:
      return freezingDrizzle;
    case 1171:
      return heavyFreezingDrizzle;
    case 1180:
      return patchyLightRain;
    case 1183:
      return lightRain;
    case 1186:
      return moderateRainAtTimes;
    case 1189:
      return moderateRain;
    case 1192:
      return heavyRainAtTimes;
    case 1195:
      return heavyRain;
    case 1198:
      return lightFreezingRain;
    case 1201:
      return moderateOrHeavyFreezingRain;
    case 1204:
      return lightSleet;
    case 1207:
      return moderateOrHeavySleet;
    case 1210:
      return patchyLightSnow;
    case 1213:
      return lightSnow;
    case 1216:
      return patchyModerateSnow;
    case 1219:
      return moderateSnow;
    case 1222:
      return patchyHeavySnow;
    case 1225:
      return heavySnow;
    case 1237:
      return icePellets;
    case 1240:
      return lightRainShower;
    case 1243:
      return moderateOrHeavyRainShower;
    case 1246:
      return torrentialRainShower;
    case 1249:
      return lightSleetShowers;
    case 1252:
      return moderateOrHeavySleetShowers;
    case 1255:
      return lightSnowShowers;
    case 1258:
      return moderateOrHeavySnowShowers;
    case 1261:
      return lightShowersOfIcePellets;
    case 1264:
      return moderateOrHeavyShowersOfIcePellets;
    case 1273:
      return patchyLightRainWithThunder;
    case 1276:
      return moderateOrHeavyRainWithThunder;
    case 1279:
      return patchyLightSnowWithThunder;
    case 1282:
      return moderateOrHeavySnowWithThunder;
    default:
      null;
  }
}

export default WeatherImages;
