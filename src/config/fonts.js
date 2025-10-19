// 字体配置文件
import { Platform } from 'react-native';

// Web字体支持
const isWeb = Platform.OS === 'web';

export const Fonts = {
  // 系统字体（推荐）
  system: {
    regular: isWeb ? 'Arial, sans-serif' : 'System',
    bold: isWeb ? 'Arial, sans-serif' : 'System',
    light: isWeb ? 'Arial, sans-serif' : 'System',
    medium: isWeb ? 'Arial, sans-serif' : 'System',
  },
  
  // iOS 系统字体
  ios: {
    regular: isWeb ? 'Helvetica, Arial, sans-serif' : 'Helvetica',
    bold: isWeb ? 'Helvetica-Bold, Arial, sans-serif' : 'Helvetica-Bold',
    light: isWeb ? 'Helvetica-Light, Arial, sans-serif' : 'Helvetica-Light',
    medium: isWeb ? 'Helvetica-Medium, Arial, sans-serif' : 'Helvetica-Medium',
  },
  
  // Android 系统字体
  android: {
    regular: isWeb ? 'Roboto, Arial, sans-serif' : 'Roboto',
    bold: isWeb ? 'Roboto-Bold, Arial, sans-serif' : 'Roboto-Bold',
    light: isWeb ? 'Roboto-Light, Arial, sans-serif' : 'Roboto-Light',
    medium: isWeb ? 'Roboto-Medium, Arial, sans-serif' : 'Roboto-Medium',
  },
  
  // 自定义字体（需要先安装字体文件）
  custom: {
    regular: 'CustomFont-Regular',
    bold: 'CustomFont-Bold',
    light: 'CustomFont-Light',
    medium: 'CustomFont-Medium',
  },
  
  // 流行字体选项
  popular: {
    // 现代字体
    modern: isWeb ? 'SF Pro Display, Arial, sans-serif' : 'SF Pro Display', // iOS
    // 优雅字体
    elegant: isWeb ? 'Georgia, serif' : 'Georgia',
    // 简洁字体
    clean: isWeb ? 'Avenir Next, Arial, sans-serif' : 'Avenir Next', // iOS
    // 创意字体
    creative: isWeb ? 'Futura, Arial, sans-serif' : 'Futura',
  }
};

// Spotify风格字体配置
export const SpotifyStyleFonts = {
  // Montserrat - 最接近Circular的免费字体
  montserrat: {
    regular: 'Montserrat-Regular',
    bold: 'Montserrat-Bold',
    light: 'Montserrat-Light',
    medium: 'Montserrat-Medium',
  },
  
  // Inter - 专为屏幕设计
  inter: {
    regular: 'Inter-Regular',
    bold: 'Inter-Bold',
    light: 'Inter-Light',
    medium: 'Inter-Medium',
  },
  
  // Roboto - Google字体
  roboto: {
    regular: 'Roboto',
    bold: 'Roboto-Bold',
    light: 'Roboto-Light',
    medium: 'Roboto-Medium',
  },
  
  // Open Sans - 经典选择
  openSans: {
    regular: 'OpenSans-Regular',
    bold: 'OpenSans-Bold',
    light: 'OpenSans-Light',
    medium: 'OpenSans-Medium',
  },
};

// Merriweather字体配置 - 优雅的衬线字体
export const MerriweatherFonts = {
  regular: 'Merriweather_24pt-Regular',
  bold: 'Merriweather_24pt-Bold',
  light: 'Merriweather_24pt-Light',
  italic: 'Merriweather_24pt-Italic',
};

// 字体主题选项
export const FontThemes = {
  // 系统字体主题
  system: {
    regular: isWeb ? 'Arial, sans-serif' : (Platform.OS === 'ios' ? 'System' : 'Roboto'),
    bold: isWeb ? 'Arial, sans-serif' : (Platform.OS === 'ios' ? 'System' : 'Roboto'),
    light: isWeb ? 'Arial, sans-serif' : (Platform.OS === 'ios' ? 'System' : 'Roboto'),
    medium: isWeb ? 'Arial, sans-serif' : (Platform.OS === 'ios' ? 'System' : 'Roboto'),
  },
  
  // Montserrat主题 - Spotify风格
  montserrat: {
    regular: isWeb ? 'Montserrat, Arial, sans-serif' : 'Montserrat-Regular',
    bold: isWeb ? 'Montserrat, Arial, sans-serif' : 'Montserrat-Bold',
    light: isWeb ? 'Montserrat, Arial, sans-serif' : 'Montserrat-Light',
    medium: isWeb ? 'Montserrat, Arial, sans-serif' : 'Montserrat-Medium',
  },
  
  // Merriweather主题 - 优雅衬线字体
  merriweather: {
    regular: isWeb ? 'Merriweather, Georgia, serif' : 'Merriweather_24pt-Regular',
    bold: isWeb ? 'Merriweather, Georgia, serif' : 'Merriweather_24pt-Bold',
    light: isWeb ? 'Merriweather, Georgia, serif' : 'Merriweather_24pt-Light',
    italic: isWeb ? 'Merriweather, Georgia, serif' : 'Merriweather_24pt-Italic',
    // 对于medium，我们使用regular
    medium: isWeb ? 'Merriweather, Georgia, serif' : 'Merriweather_24pt-Regular',
  },
};

// 当前使用的字体主题 - 使用Merriweather字体
export const CurrentFont = FontThemes.merriweather;

// 字体大小配置
export const FontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 28,
  huge: 32,
};
