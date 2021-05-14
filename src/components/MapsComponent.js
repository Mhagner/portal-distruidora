export function MapsComponent() {
    return (
        <div className="mapouter mt-4 mb-4">
            <div className="gmap_canvas">
                <iframe
                    width={802}
                    height={608}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Portal%20Distribuidora%20de%20Materiais%20El%C3%A9tricos%20e%20ilumina%C3%A7%C3%A3o%20-%20Avenida%20Ville%20-%20Residencial%20Center%20Ville,%20Goi%C3%A2nia%20-%20GO,%20Brasil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0} />
                <a href="https://whatismyip-address.com/fmovies">fmovies</a><br />
                <style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;height:608px;width:802px;}" }} />
                <a href="https://www.embedgooglemap.net">google maps iframe options</a>
                <style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:608px;width:802px;}" }} />
            </div>
        </div>
    )
}


