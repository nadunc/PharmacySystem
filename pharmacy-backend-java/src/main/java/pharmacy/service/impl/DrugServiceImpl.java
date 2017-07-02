package pharmacy.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pharmacy.repository.DrugRepository;
import pharmacy.service.DrugService;

/**
 * Created by Nadun on 6/28/2017.
 */

@Service
public class DrugServiceImpl implements DrugService {
    @Autowired
    private DrugRepository drugRepository;
}
