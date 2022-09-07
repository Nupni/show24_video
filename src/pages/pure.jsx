import { useEffect, useState, useRef } from 'preact/hooks';
import Router from 'preact-router';
import VdoBox from '../components/VdoBox';
import VdoList from '../components/VdoList';

const data = [
  {
    name: 'FOOTBALL : เหตุใด เออร์ลิ่ง ฮาแลนด์ ฟอร์มโหดทุกสังเวียน ? | FOOTBALLISTA EP.504',
    path: '/src/assets/vdo/1.mp4',
  },
  {
    name: 'FOOTBALL _ ย้อนรอยครั้งหนึ่ง คล็อปป์ต้องพาดอร์ทมุนด์หนีตกชั้น  _ FOOTBALLISTA EP.501',
    path: '/src/assets/vdo/2.mp4',
  },
];

export default function Pure() {
  const [mainVdo, setMainVdo] = useState(data[0]);
  const mainVdoRef = useRef();

  useEffect(() => {
    setMainVdo(data[0]);
  }, []);

  return (
    <>
      <main className="h-screen w-screen bg-white text-gray-900 grid grid-cols-4 gap-8 px-28 py-20">
        <section className="col-span-3">
          <div className="bg-white h-5/6">
            <VdoBox source={mainVdo.path} setRef={mainVdoRef} />
          </div>

          <h2 className="py-6 text-2xl">{mainVdo.name}</h2>
        </section>
        <section className="bg-white overflow-y-scroll overflow-x-none">
          {[...Array(24 / 2).keys()].map((fake) =>
            data.map((vdo) => (
              <VdoList
                source={vdo.path}
                name={vdo.name}
                onChangeVdo={() => {
                  setMainVdo(vdo);
                  mainVdoRef.current.load();
                }}
              />
            ))
          )}
        </section>
      </main>
    </>
  );
}
