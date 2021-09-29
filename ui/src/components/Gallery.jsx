import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useEffect, useState } from "react";

const Gallery = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                let response = await fetch('http://localhost:3001/gallery');
                setData(await response.json());
            } catch (e){
                console.log(e);
            }
        }
        getData();
    },[]);

    return (
        <>
        <Grid container spacing={3} padding={5}>
            {data.map(item => {
                return <Grid item xs={6}>
                    <Card sx={{position: "relative"}}>
                        <CardMedia sx={{position: "absolute"}} component="img" image={item.imageUrl} height="700px" />
                        <CardContent 
                        sx={{
                            position:"relative", 
                            backgroundColor: "transparent"
                        }} 
                        style={{
                            color: "#ffffff", 
                            backgroundColor: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(115,115,115,1) 35%, rgba(255,255,255,1) 100%)", height: "400px"}}
                            >
                                {item.title}
                        </CardContent>
                    </Card>
                </Grid>
            })}
        </Grid>
        </>
    )
}

export default Gallery;