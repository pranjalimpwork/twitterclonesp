import React, { FC } from "react";
import Image from "next/image";
import style from "./style.module.scss";
import Link from "next/link";
import { menulist } from "constants/routemap";
const Menu: FC<any> = ({ data, active }) => {
  const { title, path, icon } = data;
  return (
    <Link href={path}>
      <div className={`${style.menu} ${active ? style.active : ""}`}>
        <div className={style.icon_box}>
          <Image
            src={icon + (active ? "-Fill" : "") + ".svg"}
            width={20}
            height={20}
            alt=""
          />
        </div>
        <div className={style.title}>{title}</div>
      </div>
    </Link>
  );
};

const Sidebar: FC<any> = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.logo_box}>
        <Image src="/assets/icons/Twitter.svg" width={24} height={24} alt="" />
      </div>
      <div className={style.menu_container}>
        {menulist.map((data: any, ind: any) => {
          return <Menu key={ind} data={data} active={ind == 0} />;
        })}
      </div>
      <div className={style.tweet_btn}>Tweet</div>

      <div className={style.user_info_box}>
        <div className={style.profile_img_box}></div>
        <div className={style.info}>
          <div className={style.name}>Pranjal</div>
          <div className={style.user_name}>@impranjal.js</div>
        </div>
        <div className={style.more_option}>
          <Image src="/assets/icons/More-2.svg" width={18} height={18} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
