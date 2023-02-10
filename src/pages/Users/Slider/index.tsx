import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { 
    AutoButton, 
    AutoNavigation, 
    Label, 
    ManualNavigation, 
    SlideImage, 
    SlideItems, 
    SliderContainer, 
    Slides 
} from "../styles";

const Slider = () => {

    const { id }: any = useParams();

    const [slide, setSlide] = useState<any>([]);

    const url = "/fake_API/db.json";

    const getSlides = async () => {
        const response = await axios.get(url)
        const data = response.data.users.map((item: any) => item.images.slider)
        setSlide(data[id])
    }

    useEffect(() => {
        getSlides();
    }, [id])

    const sliderData = []
    for(let i in slide) {
        sliderData.push(
            slide[i].imageSlider
        )
    }

    return (
        <SliderContainer>

            {/* Define tamanho da área onde vai conter o conteúdo do slider (midia/texto) */}
            <Slides>
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <SlideItems className="first">
                    <SlideImage src={sliderData[0]} alt="Slider1" />
                </SlideItems>
                <SlideItems>
                    <SlideImage src={sliderData[1]} alt="Slider2" />
                </SlideItems>
                <SlideItems>
                    <SlideImage src={sliderData[2]} alt="Slider3" />
                </SlideItems>

                {/* Navegação onde define os checked quando cada slide estiver ativo */}
                <AutoNavigation>
                    <AutoButton className="btn-auto1"></AutoButton>
                    <AutoButton className="btn-auto2"></AutoButton>
                    <AutoButton className="btn-auto3"></AutoButton>
                </AutoNavigation>
            </Slides>

            {/* Div responsável por criar os bullets de navegação dos slides */}
            <ManualNavigation>
                <Label htmlFor="radio1"></Label>
                <Label htmlFor="radio2"></Label>
                <Label htmlFor="radio3"></Label>
            </ManualNavigation>
        </SliderContainer>
    )
}

export default Slider;