'use client'
import { doc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db, storage } from '../shared/FirebaseConfig';
import { RiImageAddLine } from 'react-icons/ri';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { RxCross2 } from 'react-icons/rx'

export default function page() {

    const [isAdmin, setIsAdmin] = useState(false);
    let [techs, setTechs] = useState([]);
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');
    const [lang, setLang] = useState('');
    const [features, setFeatures] = useState('');
    const [allFeatures, setAllFeatures] = useState([]);
    const [data, setData] = useState({
        imgs: [],
        name: '',
        description: '',
        languages: [],
        features: [],
        url: ''
    });

    useEffect(() => {
        const isAdminStored = localStorage.getItem('isAdmin');
        setIsAdmin(isAdminStored === 'true');
    }, [])

    let id = new Date().getTime().toString();

    let n;
    let v;

    function handle(e) {
        n = e.target.name;
        v = e.target.value;
        setData({ ...data, [n]: v });
    }

    async function add() {

        let imgs = [];
        let id = new Date().getTime().toString();

        imgs.push(img1, img2, img3, img4);
        data.languages = techs;
        data.features = allFeatures;

        imgs.map((i) => {
            const storageRef = ref(storage, 'imgs/' + i.name);
            uploadBytes(storageRef, i).then((snapshot) => {
            }).then((res) => {
                getDownloadURL(storageRef).then(async (url) => {
                    data.imgs.push(url);
                    await setDoc(doc(db, 'projects', id), data).then(() => {
                        alert('data added successfully');
                    })
                })
            })
        })
    }

    function addLang() {
        setTechs(techs => [...techs, lang]);
        setLang('');
    }

    function addFeature() {
        setAllFeatures(feature => [...feature, features]);
        setFeatures('');
    }

    function remove(i) {
        setTechs(techs.filter(item => item !== i));
    }

    function removeFeat(i) {
        setAllFeatures(allFeatures.filter(item => item !== i));
    }

    return (
        <div className="container w-full flex flex-col items-center h-fit justify-center p-5">

            <div className="container w-full flex md:flex-row flex-col gap-3 p-5">

                <div className="container md:w-3/12 p-5 h-[300px]">

                    <label htmlFor="img1">
                        <div className="container cursor-pointer w-full h-full border-2 border-dotted border-gray-400 flex items-center justify-center">
                            {img1 ? <img src={window.URL.createObjectURL(img1)} alt='' className='w-full h-[100%]' /> : <RiImageAddLine size={50} />}
                        </div>

                    </label>

                    <input type="file" name="img1" hidden onChange={(e) => { setImg1(e.target.files[0]) }} id="img1" />

                </div>

                <div className="container md:w-3/12 p-5 h-[300px]">

                    <label htmlFor="img2">
                        <div className="container cursor-pointer w-full h-full border-2 border-dotted border-gray-400 flex items-center justify-center">
                            {img2 ? <img src={window.URL.createObjectURL(img2)} alt='' className='w-full h-[100%]' /> : <RiImageAddLine size={50} />}
                        </div>

                    </label>

                    <input type="file" name="img2" hidden onChange={(e) => { setImg2(e.target.files[0]) }} id="img2" />

                </div>

                <div className="container md:w-3/12 p-5 h-[300px]">

                    <label htmlFor="img3">
                        <div className="container cursor-pointer w-full h-full border-2 border-dotted border-gray-400 flex items-center justify-center">
                            {img3 ? <img src={window.URL.createObjectURL(img3)} alt='' className='w-full h-[100%]' /> : <RiImageAddLine size={50} />}
                        </div>

                    </label>

                    <input type="file" name="img3" hidden onChange={(e) => { setImg3(e.target.files[0]) }} id="img3" />

                </div>

                <div className="container md:w-3/12 p-5 h-[300px]">

                    <label htmlFor="img4">
                        <div className="container cursor-pointer w-full h-full border-2 border-dotted border-gray-400 flex items-center justify-center">
                            {img4 ? <img src={window.URL.createObjectURL(img4)} alt='' className='w-full h-[100%]' /> : <RiImageAddLine size={50} />}
                        </div>

                    </label>

                    <input type="file" name="img4" hidden onChange={(e) => { setImg4(e.target.files[0]) }} id="img4" />

                </div>

            </div>

            <div className="container p-5 flex flex-col gap-5  md:w-7/12">

                <input name='name' value={data.name} onChange={handle} type="text" placeholder='name...' className="w-full focus:outline-none p-3 text-white bg-[#232121]" />
                <input name='url' value={data.url} onChange={handle} type="text" placeholder='project url...' className="w-full focus:outline-none p-3 text-white bg-[#232121]" />

                <textarea name="description" value={data.description} onChange={handle} id="desc" cols="30" rows="10" className="w-full focus:outline-none p-3 text-white bg-[#232121]" placeholder='description.....'></textarea>

                <div className="container w-full flex">
                    <input value={lang} onChange={(e) => { setLang(e.target.value) }} type="text" placeholder='add technologies...' max={100} className="w-full focus:outline-none p-3 text-white bg-[#232121]" />
                    <button onClick={addLang} className="p-3 bg-red-500 text-lg font-semibold text-white">+</button>
                </div>

                <div className="container w-full p-5 columns-4">
                    {
                        techs?.map((d, i) => {
                            return (
                                <button className="p-3 px-7 w-fit text-md font-bold items-center justify-center gap-3 text-white bg-[#212020] flex">{d} <RxCross2 onClick={() => { remove(d) }} size={20} /> </button>
                            )
                        })
                    }
                </div>

                <div className="container w-full flex">
                    <input value={features} onChange={(e) => { setFeatures(e.target.value) }} type="text" placeholder='add features...' max={100} className="w-full focus:outline-none p-3 text-white bg-[#232121]" />
                    <button onClick={addFeature} className="p-3 bg-red-500 text-lg font-semibold text-white">+</button>
                </div>

                <div className="container w-full p-5 flex flex-col gap-2">
                    {
                        allFeatures?.map((d, i) => {
                            return (
                                <button className="p-3 px-7 w-fit text-md font-bold items-center justify-center gap-3 text-white bg-[#212020] flex">{d} <RxCross2 onClick={() => { removeFeat(d) }} size={20} /> </button>
                            )
                        })
                    }
                </div>

                <button onClick={add} className="w-full p-3 bg-red text-lg font-semibold text-white bg-red-600 my-10">add</button>

            </div>

        </div>
    )
}
