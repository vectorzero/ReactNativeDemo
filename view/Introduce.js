import React, { Component } from 'react';
import {Text, View, ScrollView} from 'react-native';
import {NavigationPage, ListRow, Label} from 'teaset';

export default class Introduce extends Component{
    renderListRow(detail){
        if(detail=='detail1'){
            return(
                <ListRow 
                    title=''
                    detail={'    桂林七星（岩）景区位于桂林漓江东岸，距市中心1.5公里，占地面积约137.4公顷，绿化覆盖率达84％，是桂林市历史至悠久、景致集中、适合家庭畅快游玩的世界旅游组织推荐的国家AAAA级景区。七星景区集山水观光、运动休闲、文化体验为一体，是桂林山水与文化、运动与休闲的聚集地。'}
                    titlePlace='top' 
                />
            )
        }else if(detail=='detail2'){
            return(
                <ListRow 
                    title=''
                    detail={'    象山景区成立于1986年，国家AAAAA级景区。景区因有一座酷似大象的象鼻山而得名，象鼻山位于桂林市漓江与桃花江的汇流处，以其独特的山形和悠久的历史成为桂林城徽标志。位于象鼻与象身之间的水月洞内留存摩崖石刻50余件，是广西重点文物保护单位，唐代著名诗人韩愈的名句：“江作青罗带，山如碧玉簪”镌刻洞中。'}
                    titlePlace='top' 
                />
            )
        }else if(detail=='detail3'){
            return(
                <ListRow 
                    title=''
                    detail={'    桂林山水甲天下，芦笛美景堪至佳。芦笛岩是桂林的一颗璀璨明珠。她位于桂林市西北郊，距市中心5公里，是一个以游览岩洞为主、观赏山水田园风光为辅的风景名胜区。芦笛岩洞深240米，游程 500米。洞内有大量奇麓多姿、玲珑剔透的石笋、石乳、石柱、石幔、石花，琳琅满目，组成狮岭朝霞、红罗宝帐、盘龙宝塔、原始森林、水晶宫、花果山等景观，游客目不暇接，如同仙境，被誉为“大自然的艺术之宫”。'}
                    titlePlace='top' 
                />
            )
        }else if(detail=='detail4'){
            return(
                <ListRow 
                    title=''
                    detail={'    靖江王城位于市中心的独秀峰下，是明代靖江王府。宋代时这里是铁牛寺，元代改为大国寺，后又称万寿殿。它有承运门、承运殿、寝宫，左建宗庙，右筑社坛，亭台阁轩，堂室楼榭，无所不备，红墙黄瓦，云阶玉壁，辉煌壮观。王城周围是3里长的城恒，内外以方形青石修砌，十分坚固。'}
                    titlePlace='top' 
                />
            )
        }else if(detail=='detail5'){
            return(
                <ListRow 
                    title=''
                    detail={'    两江四湖景区是指漓江，桃花江，榕湖，杉湖，桂湖，木龙湖构成的环城风景带。风景带有三个主题景区，即：以木龙古渡，古城墙为主景，宝积山，叠彩山为背景，体现城市文化的木龙古水道景区；以山林自然野趣为特色的桂湖景区；以体现“城在景中，景在城中”的山水城市空间特征为特色的榕、杉湖景区。三个景区的园林绿化、园林建筑、名人雕塑和桂林山水诗廊，均可让人感受到桂林的天生丽质与深厚的文化底蕴'}
                    titlePlace='top' 
                />
            )
        }else if(detail=='detail6'){
            return(
                <ListRow 
                    title=''
                    detail={'    大榕树位于高田乡的穿岩村。田野中有一棵古榕遮天蔽日，树高17米，树围7.05米，硕大的树冠覆盖2亩土地，盘根错节，枝繁叶茂，气根如老人胡须在风中飘拂，树干有的贴地而生，有的斜出如飞龙破雾，是罕见的奇树。史载，它与阳朔县同龄，至今有1400多年的历史。电影《刘三姐》中阿牛哥与刘三姐对歌、抛绣球、定情终身的一场戏就是在树下拍摄的。这棵大榕树见证了他俩生死不渝的爱情。'}
                    titlePlace='top' 
                />
            )
        }else if(detail=='detail7'){
            return(
                <ListRow 
                    title=''
                    detail={'    漓江的山水让多少人魂牵梦绕，阳朔的山水又隐藏了多少故事让人迷离？白日山水间不愿离去不就是为了入夜到印象刘三姐的舞台中寻找那些景绣的故事吗？ 浩大的漓江山水实景，漫妙的水上舞台，如诗如幻的舞蹈，飘荡耳畔的歌声，震撼的视听享受，是您到了阳朔后不得不选饕餮视听盛宴。'}
                    titlePlace='top' 
                />
            )
        }else if(detail=='detail8'){
            return(
                <ListRow 
                    title=''
                    detail={'    玉圭园凯旋王国陆地乐园是桂林新开园的陆地主题乐园，乐园主要由先进安全的大型机动游乐设施、趣味景观、主题游乐、精彩表演、特色美食、旅游商业组成。在80多亩的乐园之中，有20种惊险刺激的游戏项目供游客游玩，较大型悬挂过山车、矿山车、激流勇进、大摆锤、海盗船等，惊险刺激。'}
                    titlePlace='top' 
                />
            )
        }
    }
    render(){
        return(
            <ScrollView style={{height:80}}>
                {this.renderListRow(this.props.senceDetail)}
            </ScrollView>
        )
    }
}