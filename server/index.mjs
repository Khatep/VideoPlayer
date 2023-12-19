import express from 'express'
import cors from 'cors';

const app = express();
const port = 9090;

app.use(cors({
    origin: ["http://localhost:9090"],
}));

app.get("/api/playlists", cors(), (req, res) => {
    res.send(
        [
            { id: 1, name: 'Default', image: "https://w.forfun.com/fetch/03/03f8cd3f6796daaacc1fe43ffb7704b7.jpeg", description: 'Default', videos: ['https://youtu.be/Oh_sOZ0UT0A?si=CcFX6SkFulJIzHdT', 'https://youtu.be/7br0tpOhCo0?si=YUsjDH6WraUmbMSP', 'https://youtu.be/KGsJHYSzAKM?si=odux4xpRbp1TAQz4', 'https://youtu.be/gbgiFVFhGkc?si=-gIanigqv6scy4t7'] },
            { id: 2, name: 'Music for drive', image: "", description: 'Vibe music', videos: ['https://youtu.be/OXO_iPk0hg0?si=TreGCfGPdVe47aEv', 'https://youtu.be/25BkVBgFD9Y?si=5XLDMT5HVF5vdx11', 'https://youtu.be/MV_3Dpw-BRY?si=BTUgEeWc7j54dszr'] },
            { id: 3, name: 'English', image: "", description: 'For education', videos: ['https://youtu.be/1wU2L071_js?si=Qz98qwJQMkPOsA1V', 'https://youtu.be/kldkujM7CLg?si=PkuFF994W980zCZN', 'https://youtu.be/wXsonoRfBVU?si=7147kuqA2dG5B_4X'] },
            { id: 4, name: 'Valorant', image: "", description: 'Online Gaming', videos: ['https://youtu.be/p_EbnbEqnVM?si=pZyn8dRRUWnOst7s', 'https://youtu.be/XfuMEmcz3k0?si=JWgnVWAgVlaYIcKm', 'https://youtu.be/CdZN8PI3MqM?si=JBYdsWm45ekf4h3p'] },
            { id: 5, name: 'Blogs in nature', image: "", description: 'Vibe', videos: ['https://youtu.be/sr284c-q8oY?si=2RNCfo_aM3BAtCBx', 'https://youtu.be/Dwjb-3NoHuw?si=hVm_6VIy2CSXUKPz', 'https://youtu.be/5uOiLEXKQTc?si=LrCfDjXlBVJpVZ6h'] },
            { id: 6, name: 'CS:GO', image: "", description: 'Online Gaming', videos: ['https://youtu.be/5uOiLEXKQTc?si=LrCfDjXlBVJpVZ6h', 'https://youtu.be/o9AL6b6SPLc?si=LRuwQPRqXmxeggyf', 'https://youtu.be/edYCtaNueQY?si=iFpPQmjghPT_UtC_'] },
        ]
    )
}); 

app.listen(port, () => {
    console.log(`Server has been started on port ${port}...`)
})

