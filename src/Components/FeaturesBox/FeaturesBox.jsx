import styles from "./FeaturesBox.module.scss"
export default function FeaturesBox({title,icon,desc}) {
  return <>
  <div className="text-white text-center element-center flex-col">
    <div >
      <img src={icon} alt="image" className="w-[80px] h-[80px] object-contain"/>
    </div>
    <h4 className="text-xl font-semibold my-[15px]">{title}</h4>
    <p className="font-normal text-sm">{desc}</p>
  </div>
  </>
}
