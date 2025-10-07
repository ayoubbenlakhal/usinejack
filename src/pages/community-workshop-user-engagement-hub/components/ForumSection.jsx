import React, { useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const FormulaireReclamation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    societe: "",
    numero: "",
    email: "",
    modele: "",
    serie: "",
    image: null,
    probleme: "",
    message: "",
    audio: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Réclamation envoyée ✅", formData);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* 🔹 Background */}
      <div className="absolute inset-0">
        <img
          src="https://kb-oss-ali.chinajack.com/2025-06-06%2013%3A58%3A09%E8%BF%87EN.png"
          alt="Machine à coudre industrielle"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-blue-900/50"></div>
      </div>

      {/* 🔹 Container */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-lg w-full border border-slate-200">
        {/* Progress */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Icon + Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg mb-3">
            <Icon name="Wrench" size={28} color="white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 text-center">
            Formulaire de Réclamation
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <Input
                type="text"
                name="prenom"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="societe"
                placeholder="Nom de société"
                value={formData.societe}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                name="numero"
                placeholder="Votre numéro (+212XXXXXXXXX)"
                value={formData.numero}
                onChange={handleChange}
                pattern="^\+212[0-9]{9}$"
                title="Le numéro doit commencer par +212 et contenir 9 chiffres après."
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Votre email (@gmail.com uniquement)"
                value={formData.email}
                onChange={handleChange}
                pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                title="Veuillez entrer une adresse Gmail valide (exemple: nom@gmail.com)."
                required
              />
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <Input
                type="text"
                name="modele"
                placeholder="Modèle de machine"
                value={formData.modele}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="serie"
                placeholder="Série de machine"
                value={formData.serie}
                onChange={handleChange}
                required
              />

              {/* Upload image */}
              <div className="space-y-2">
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="block w-full text-sm text-slate-600 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                />
                <p className="text-sm text-slate-500">
                  {formData.image ? `📷 Image sélectionnée : ${formData.image.name}` : "📷 Aucune image importée"}
                </p>
              </div>

              <select
                name="probleme"
                value={formData.probleme}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Type de problème</option>
                <option value="mecanique">Mécanique</option>
                <option value="electronique">Électronique</option>
                <option value="autre">Autre</option>
              </select>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <textarea
                name="message"
                placeholder="Expliquez votre réclamation..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />

              {/* Upload audio */}
              <div className="space-y-2">
                <input
                  type="file"
                  name="audio"
                  accept="audio/*"
                  onChange={handleChange}
                  className="block w-full text-sm text-slate-600 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-600 hover:file:bg-green-100"
                />
                <p className="text-sm text-slate-500">
                  {formData.audio ? `🎵 Audio sélectionné : ${formData.audio.name}` : "🎵 Aucun audio importé"}
                </p>
              </div>
            </>
          )}

          {/* STEP 4 (Résumé) */}
          {step === 4 && (
            <div className="text-slate-700 space-y-3">
              <p><strong>Prénom :</strong> {formData.prenom}</p>
              <p><strong>Nom :</strong> {formData.nom}</p>
              <p><strong>Société :</strong> {formData.societe}</p>
              <p><strong>Téléphone :</strong> {formData.numero}</p>
              <p><strong>Email :</strong> {formData.email}</p>
              <p><strong>Modèle :</strong> {formData.modele}</p>
              <p><strong>Série :</strong> {formData.serie}</p>
              <p><strong>Problème :</strong> {formData.probleme}</p>
              <p><strong>Message :</strong> {formData.message}</p>
              <p>
                {formData.image
                  ? `📷 Image importée : ${formData.image.name}`
                  : "📷 Aucune image importée"}
              </p>
              <p>
                {formData.audio
                  ? `🎵 Audio importé : ${formData.audio.name}`
                  : "🎵 Aucun audio importé"}
              </p>
              <p className="text-sm text-slate-500">
                ⚡ Vérifiez vos informations avant d’envoyer.
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-4">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                ⬅️ Précédent
              </Button>
            )}
            {step < 4 ? (
              <Button type="button" onClick={nextStep} className="ml-auto">
                Suivant ➡️
              </Button>
            ) : (
              <Button
                type="submit"
                size="lg"
                className="ml-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
              >
                ✅ Envoyer
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormulaireReclamation;
