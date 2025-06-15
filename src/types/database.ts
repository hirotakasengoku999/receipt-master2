export interface SanteiFlag {
  target_code: string
  target_name: string
  sekizui_yuhatsu_kasan: number
  jidou_hougouki_kasan: number
  jidou_funngouki_kasan: number
  chouonpa_goukokekkai_kasan: number
  fukubiku_shujutsu_endoscope_kasan: number
  fukubiku_shujutsu_bone_soft_kasan: number
  touketsu_houzou_kasan: number
  chouonpa_sessaku_kiki_kasan: number
  setsukaikou_inkyoku_heisa_kiki_kasan: number
}

export interface ChiSquareDisease {
  target_code: string
  disease_code: string
  disease_name: string
}

export interface ChiSquareDrug {
  target_code: string
  drug_code: string
  drug_name: string
}

export interface ChiSquareMedicalProcedures {
  target_code: string
  procedure_code: string
  procedure_name: string
  division_number: number
}

export interface ChiSquareSpecificDevice {
  target_code: string
  specific_device_code: string
  specific_device_name: string
}

export interface DetailData {
  santeiFlag: SanteiFlag
  diseases: ChiSquareDisease[]
  drugs: ChiSquareDrug[]
  procedures: ChiSquareMedicalProcedures[]
  devices: ChiSquareSpecificDevice[]
}
