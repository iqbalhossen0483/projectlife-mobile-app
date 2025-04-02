import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

function Pragnent(props: SvgProps) {
  return (
    <Svg
      width={props.width || 21}
      height={props.height || 21}
      viewBox='0 0 22 23'
      fill={props.color || "#000"}
      {...props}
    >
      <G clipPath='url(#clip0_1_7030)'>
        <Path
          d='M17.835 18.581a3.88 3.88 0 00-1.1-1.82 4.254 4.254 0 00-1.003-.687 1.308 1.308 0 00-.877-1.492l-.033-.01a4.415 4.415 0 00-2.025-3.24c-.825-.526-1.423-1.094-1.842-1.755l.428.094c.453.1.92-.032 1.249-.351.6-.582.92-1.279.98-2.13l.262-.102a.6.6 0 00.28-.898l-.26-.384a1.417 1.417 0 01-.233-.976l.104-.808a2.89 2.89 0 00-.622-2.188.344.344 0 00-.07-.084l-.005-.006a2.892 2.892 0 00-2.17-.98H8.874c-1.2 0-2.257.722-2.692 1.84-.127.324-.208.66-.246 1a2.216 2.216 0 00-2.068 2.208c0 1.22.993 2.213 2.213 2.213A2.2 2.2 0 007.2 7.72l-.01.067a27.786 27.786 0 00-.259 3.211 1.708 1.708 0 00-.227.852v3.359c0 1.389.401 2.723 1.147 3.865a4.479 4.479 0 01-.994 2.737l-.248.307a.344.344 0 10.534.432l.248-.307a5.152 5.152 0 001.07-2.365c.065.075.132.149.201.22l2.36 2.473a.344.344 0 10.497-.474l-2.36-2.473a6.372 6.372 0 01-1.767-4.415v-3.36c0-.568.462-1.03 1.03-1.03.57 0 1.032.462 1.032 1.03v4.407c0 .922.32 1.825.899 2.543l3.028 3.751a.343.343 0 00.483.052.344.344 0 00.052-.484l-3.028-3.75a3.371 3.371 0 01-.746-2.112V11.85c0-.088-.007-.175-.02-.26a5.394 5.394 0 002.355.353 3.727 3.727 0 011.652 2.615c-.27.067-.519.22-.7.443l-.254.312a1.31 1.31 0 00.636 2.08l.065.02a1.303 1.303 0 001.52-.605l.057-.103c.874.444 1.471 1.15 1.72 2.059.324 1.183-.03 2.547-.863 3.319a.344.344 0 00.468.504c1.028-.954 1.453-2.563 1.058-4.006zM6.822 2.854A2.189 2.189 0 018.873 1.45h2.026c.583 0 1.14.233 1.552.641-.253.573-.805.898-1.484.857a.69.69 0 00-.707.505c-.128.477-.387.93-.788 1.386-.442-.311-.83-.22-1.078-.088-.413.221-.654.679-.613 1.165.021.249.077.44.17.585a.804.804 0 01-.295.217l-.574-.938a3.326 3.326 0 01-.26-2.927zM4.555 5.812c0-.786.598-1.435 1.363-1.516.04.646.234 1.282.578 1.844l.53.867c-.26.207-.589.33-.946.33-.84 0-1.525-.684-1.525-1.524zm3.087 4.507c.04-.815.116-1.631.228-2.437l.02-.138c.017-.126.018-.253.003-.378.174-.075.365-.185.527-.358a1.776 1.776 0 00.948.33.344.344 0 00.03-.687c-.371-.032-.629-.179-.833-.472a.731.731 0 00-.034-.048c-.002-.002-.047-.06-.065-.273a.51.51 0 01.252-.5c.102-.054.202-.067.36.045a.682.682 0 00.909-.107c.474-.538.78-1.082.94-1.661.826.05 1.543-.3 1.963-.921a2.2 2.2 0 01.193 1.22l-.104.807c-.066.51.057 1.025.346 1.45l.2.294-.19.074a.647.647 0 00-.408.561c-.044.685-.297 1.243-.774 1.706a.68.68 0 01-.622.173l-1.66-.365a.344.344 0 00-.148.671l.34.075c.332.7.8 1.306 1.444 1.854-.627-.078-1.252-.288-1.89-.633a.39.39 0 00-.029-.015 1.723 1.723 0 00-1.946-.267zm7.344 5.816l-.189.33a.62.62 0 01-.723.289l-.064-.02a.615.615 0 01-.415-.414.614.614 0 01.112-.575l.253-.311a.627.627 0 01.68-.2.62.62 0 01.346.9z'
          fill='#393766'
        />
      </G>
      <Defs>
        <ClipPath id='clip0_1_7030'>
          <Path fill='#fff' transform='translate(0 .72)' d='M0 0H22V22H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Pragnent;
