import { useState, React } from "react";
import "../../../styles/ADMIN/FormAdd.css"
const FormAdd = () => {
    const [formData, setFormData] = useState({
        cooperativeName: "",
        addressGeographique: "",
        numeroTelephone: "",
        representantLegal: "",
        representativeRole: "",
        representativeEmail: "",
        representativePhoneNumber: "",
        typesProduits: {
            legume: false,
            fruit: false,
            cereale: false,
            autre: false,
        },
        nombreMembres: "",
        acceptationConditions: false,
        image: null,
    });

    // Fonction pour gérer les changements dans le formulaire
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        // Si le champ est un type checkbox, mettez à jour l'état avec un objet
        if (type === "checkbox" && name.startsWith("typesProduits")) {
            const typeProduit = name.split(".")[1];
            setFormData((prevData) => ({
                ...prevData,
                typesProduits: {
                    ...prevData.typesProduits,
                    [typeProduit]: checked,
                },
            }));
        } else {
            // Sinon, mettez à jour l'état normalement
            setFormData((prevData) => ({
                ...prevData,
                [name]:
                    type === "checkbox" ? checked : type === "file" ? files[0] : value,
            }));
        }
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici le code pour traiter les données du formulaire (par exemple, envoyer à un backend)
        console.log(formData);
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="form-add-cooperatives">
                <div className="ligne">

                    <div className="col">
                        <div>
                            <label>Nom de la coopérative</label>
                            <input type="text" name="cooperativeName" onChange={handleChange} value={formData.cooperativeName} />
                        </div>

                        <div>
                            <label>Vous ête situé où</label>
                            <input type="text" name="addressGeographique" onChange={handleChange} value={formData.addressGeographique}/>
                        </div>

                        <div>
                            <label>Numero de téléphone</label>
                            <input type="text" name="numeroTelephone" onChange={handleChange} value={formData.numeroTelephone}/>
                        </div>

                        <div>
                            <label>Nom du representant de la cooperative sur la plateforme</label>
                            <input type="text" name="representantLegal" onChange={handleChange} value={formData.representantLegal}/>
                        </div>

                        <div>
                            <label>Son rôle</label>
                            <input type="text" name="representativeRole" onChange={handleChange} value={formData.representativeRole} />
                        </div>

                       
                    </div>

                    <div className="col">
                        <div>
                            <label>Son email</label>
                            <input type="text" name="representativeEmail" onChange={handleChange} value={formData.representativeEmail}/>
                        </div>
                        <div>
                            <label>Son numéro de téléphone</label>
                            <input type="text" name="representativePhoneNumber" onChange={handleChange} value={formData.representativePhoneNumber}/>
                        </div>
                        <div>
                            <label>Nombre Membres</label>
                            <input type="number" name="nombreMembres" onChange={handleChange} value={formData.nombreMembres}/>
                        </div>
                        <div>
                            <label>Types de produits agricoles :</label>
                            <div className="typeProd">
                               
                                <label>
                                    <span>Légume</span>
                                    <input type="checkbox" name="typesProduits.legume" checked={formData.typesProduits.legume} onChange={handleChange} />
                                </label>
                                <label>
                                    <span>Fruit</span>
                                    <input type="checkbox" name="typesProduits.fruit" checked={formData.typesProduits.fruit} onChange={handleChange} />
                                </label>
                                <label>
                                    <span>Céréale</span>
                                    <input type="checkbox" name="typesProduits.cereale" checked={formData.typesProduits.cereale} onChange={handleChange}/>
                                </label>
                                <label>
                                    <span>Autre</span>
                                    <input type="checkbox" name="typesProduits.autre" checked={formData.typesProduits.autre} onChange={handleChange} />
                                </label>

                            </div>
                       
                        </div>

                       

                    </div>

                </div>
                
                <label className="aceptation">
                    <span >Acceptation des conditions utilisation</span>
                    <input type="checkbox" name="acceptationConditions" checked={formData.acceptationConditions} onChange={handleChange}/>
                </label>
                <button type="submit">Inscrire</button>
            </form>
        </>
    );
};

export default FormAdd;
