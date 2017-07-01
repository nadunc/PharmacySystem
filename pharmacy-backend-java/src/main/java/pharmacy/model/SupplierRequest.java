package pharmacy.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by Nadun on 7/1/2017.
 */

@Document(collection = "supplier_request")
public class SupplierRequest {
    @Id
    private String _id;
    private String supplier;
    private String expectedDate;
    private SupplierRequestDrug[] drugs;

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    public String getExpectedDate() {
        return expectedDate;
    }

    public void setExpectedDate(String expectedDate) {
        this.expectedDate = expectedDate;
    }

    public SupplierRequestDrug[] getDrugs() {
        return drugs;
    }

    public void setDrugs(SupplierRequestDrug[] drugs) {
        this.drugs = drugs;
    }

}


